// ./src/index.js

//set up firestore connection
const admin = require("firebase-admin");
let serviceAccount = require("../key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan("combined"));
//for dealing with JSON
app.use(express.json());

//define an endpoint for getting certain household of person by username GET
app.get("/houseByUser", (req, res) => {
  let houses = db.collection("households");
  houses.get().then(snapshot => {
    snapshot.forEach(house => {
      let residents = house.data().people;
      residents.forEach(resident => {
        if (resident == req.body.user) {
          res.status(200).send(house.id);
        }
      });
    });
  });
});

//define and endpoint for all recurring txns by house Id GET
app.get("/recurring", (req, res) => {
    let householdRef = db.collection("households").doc(req.body.houseId);
    let getDoc = householdRef.get().then(doc => {
        return (doc.data().recurring)
    }).then(arr => {
        res.status(200).send({recurring: arr})
    })
})

//define and endpoint for all txns by house Id GET
app.get("/alltxns", (req, res) => {
    let householdRef = db.collection("households").doc(req.body.houseId);
    let getDoc = householdRef.get().then(doc => {
        return (doc.data().transactions)
    }).then(arr => {
        res.status(200).send({allTxns: arr})
    })
})

//define and endpoint for get transaction by Id
app.get("/txnById", (req, res) => {
    let txnRef = db.collection("transactions").doc(req.body.txnId);
    let getDoc = txnRef.get().then(doc => {
        return (doc.data())
    }).then(txn => {
        res.status(200).send({txn: txn})
    })
})

//define an endpoint for userid by username or email GET
app.get("/userId", (req, res) => {
  let users = db.collection("users");
  users.get().then(snapshot => {
    snapshot.forEach(user => {
      if (
        user.data().username == req.body.username ||
        user.data().email == req.body.email
      ) {
        res.status(200).send(user.id);
      }
    });
  });
});

//define endpoint for creating new household using POST expecting JSON
app.post("/newhouse", (req, res) => {
  //date formatting
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  let name = req.body.name;
  let peopleIds = req.body.people;
  let cycle = req.body.cycle;
  let addDoc = db
    .collection("households")
    .add({
      name: name,
      people: peopleIds,
      current: [],
      transactions: [],
      recurring: [],
      billingStart: today,
      billingCycle: cycle
    })
    .then(ref => {
      res.status(200).send("Added document with ID: " + ref.id);
    });
});

//define an endpoint for getting certain household of person by username GET
app.get("/houseByUser/:userId", (req, res) => {
  let houses = db.collection("households");
  houses.get().then(snapshot => {
    snapshot.forEach(house => {
      let residents = house.data().people;
      residents.forEach(resident => {
        if (resident == req.params.userId) {
          res.status(200).send(house.id);
        }
      });
    });
  });
});

//define and endpoint for all recurring txns by house Id GET
app.get("/recurring/:houseId", (req, res) => {
    let householdRef = db.collection("households").doc(req.params.houseId);
    let getDoc = householdRef.get().then(doc => {
        return (doc.data().recurring)
    }).then(arr => {
        res.status(200).send({recurring: arr})
    })
})

//define and endpoint for all txns by house Id GET
app.get("/alltxns/:houseId", (req, res) => {
    let householdRef = db.collection("households").doc(req.params.houseId);
    let getDoc = householdRef.get().then(doc => {
        return (doc.data().transactions)
    }).then(arr => {
        res.status(200).send({allTxns: arr})
    })
})

//define and endpoint for get transaction by Id
app.get("/txnById/:txnId", (req, res) => {
    let txnRef = db.collection("transactions").doc(req.params.txnId);
    let getDoc = txnRef.get().then(doc => {
        return (doc.data())
    }).then(txn => {
        res.status(200).send({txn: txn})
    })
})

//define an endpoint for userid by username or email GET
app.get("/userId/:user", (req, res) => {
  let users = db.collection("users");
  users.get().then(snapshot => {
    snapshot.forEach(user => {
      if (
        user.data().username == req.params.user ||
        user.data().email == req.params.user
      ) {
        res.status(200).send(user.id);
      }
    });
  });
});

//define endpoint for creating new household using POST expecting JSON
app.post("/newhouse", (req, res) => {
  //date formatting
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  let name = req.body.name;
  let peopleIds = req.body.people;
  let cycle = req.body.cycle;
  let addDoc = db
    .collection("households")
    .add({
      name: name,
      people: peopleIds,
      current: [],
      transactions: [],
      recurring: [],
      billingStart: today,
      billingCycle: cycle
    })
    .then(ref => {
      res.status(200).send("Added document with ID: " + ref.id);
    });
});

//define endpoint for new user using POST expecting JSON
app.post("/newuser", (req, res) => {
  let username = req.body.username;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let addDoc = db
    .collection("users")
    .add({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email
    })
    .then(ref => {
      res.status(200).send("Added document with ID: " + ref.id);
    });
});

//define endpoint for adding user to household PUT expecting JSON
app.put("/addroomie", (req, res) => {
  let houseId = req.body.house;
  let roomieEmail = req.body.roomieEmail;
  let roomieId = "";

  updateDB = (houseId, roomieId) => {
    console.log(roomieId);
    let householdRef = db.collection("households").doc(houseId);

    let arrUnion = householdRef.update({
      people: admin.firestore.FieldValue.arrayUnion(roomieId)
    });

    return houseId;
  };

  //look for roomie's id
  db.collection("users")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == roomieEmail) {
          roomieId = doc.id;
        }
      });
      return roomieId;
    })
    .then(roomieId => updateDB(houseId, roomieId))
    .then(house => {
      res.status(200).send("Added a new member to household " + house);
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
});

//add transaction to household using PUT
app.put("/addtxn", (req, res) => {
  //Do some date time stuff
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  //Get data from JSON
  let totalPrice = req.body.totalPrice;
  let people = req.body.people;
  let purchaser = req.body.purchaser;
  let houseId = req.body.houseId;

  let docRef = db
    .collection("transactions")
    .add({
      totalPrice: totalPrice,
      people: people,
      purchaser: purchaser,
      houseId: houseId,
      dateTime: dateTime
    })
    .then(ref => {
      let householdRef = db.collection("households").doc(houseId);

      let arrUnion = householdRef.update({
        transactions: admin.firestore.FieldValue.arrayUnion(ref.id)
      });

      return ref.id;
    })
    .then(id => {
      res.status(200).send("Added new transaction " + id);
    });
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});

app.get("/calc/:userId", (req, res) => {
  let val = calculateOwed(req.params.userId, res);
});

calculateOwed = (user, res) => {
  let owes = 0;
  let owed = 0;
  //get transactions for that user's house
  //sum value transactions where user is beneficiary (need to use nested value) => A
  //sum value of transactions where user is purchaser; subtract value of their benefit (nested value) => B
  //do A - B to find what they owe (could be negative if they need reimburse)

  //find user's house
  db.collection("households")
    .get()
    .then(snapshot => {
      let foundHouse = "";
      snapshot.forEach(doc => {
        let users = doc.data().people;
        users.forEach(person => {
          if (person == user) {
            foundHouse = doc.id;
          }
        });
      });
      return foundHouse;
    })
    .then(house => {
      let householdRef = db.collection("households").doc(house);
      let getDoc = householdRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            console.log("Document data:", doc.data().transactions);
            let txns = doc.data().transactions;
            txns.forEach(txn => {
              let txnRef = db.collection("transactions").doc(txn);
              let getDoc = txnRef
                .get()
                .then(doc => {
                  console.log("got into the txn doc");
                  if (doc.data().purchaser == user) {
                    console.log("got into the owed section");
                    owed = owed + doc.data().totalPrice;
                  }
                  let debtors = doc.data().people;
                  debtors.forEach(debtor => {
                    if (debtor.user == user) {
                      owes = owes + debtor.amt;
                    }
                  });
                  return owes - owed;
                })
                .then(ominuso => {
                  console.log(owes);
                  console.log(owed);
                  console.log(ominuso);
                  res.status(200).send(ominuso.toString());
                  return ominuso;
                });
            });
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    });
};
