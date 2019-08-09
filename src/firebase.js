const admin = require("firebase-admin");

let serviceAccount = require("../key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default db
