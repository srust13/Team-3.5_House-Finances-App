import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const axios = require("axios");

const users = {
  "sRm3qT1cfbGrJ1FVtumR": "Andrew Gao",
  "GCULc1ErAHBod3vn8e7W": "Hannah Huh",
  "V4l80Vtf7uJ1pt5aArw1": "Daniel Knorr"

}

export default class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    {
      axios
        .get("https://us-central1-notyourfamily-ses.cloudfunctions.net/widgets/house/tOvFcMKwBEnzttFbnAju")
        .then((response) => {
          
          return response.data
        }).then(data => {
          let transactionIds = data.transactions;
          transactionIds.forEach(id => {
            let link = "https://us-central1-notyourfamily-ses.cloudfunctions.net/widgets/txnById/" + id
            axios.get(link).then(res => {
              let txn = res.data.txn;

              this.setState({ transactions: [...this.state.transactions, txn]})
              // console.log(this.state.transactions);
            })
          })
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
  
        // console.log(this.state.transactions);
      }
  }

  render() {
    return (
      <Paper>
        <Table
          style={{
            padding: "0",
            margin: "0",
            borderStyle: "solid",
            borderColor: "#282c34",
            borderWidth: "1px"
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  borderStyle: "solid",
                  borderColor: "#282c34",
                  borderWidth: "1px",
                  fontSize: "14px",
                  color: "#282c34",
                  fontWeight: "bold"
                }}
              >
                Purchaser
              </TableCell>

              <TableCell
                style={{
                  borderStyle: "solid",
                  borderColor: "#282c34",
                  borderWidth: "1px",
                  fontSize: "14px",
                  color: "#282c34",
                  fontWeight: "bold"
                }}
              >
                Users Charged
              </TableCell>
             
              <TableCell
                align="center"
                borderColor="black"
                style={{
                  borderStyle: "solid",
                  borderColor: "#282c34",
                  borderWidth: "1px",
                  fontSize: "14px",
                  color: "#282c34",
                  fontWeight: "bold"
                }}
              >
                Price ($)
              </TableCell>
              <TableCell
                align="center"
                borderColor="black"
                style={{
                  borderStyle: "solid",
                  borderColor: "#282c34",
                  borderWidth: "1px",
                  fontSize: "14px",
                  color: "#282c34",
                  fontWeight: "bold"
                }}
              >
                Date of purchase (MM-DD-YY)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.transactions.map(transaction => (
              <TableRow key={transaction.id}>
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                <TableCell
                  align="left"
                  style={{
                    borderStyle: "solid",
                    borderColor: "#282c34",
                    borderWidth: "1px",
                    fontSize: "12px"
                  }}
                >
                  {users[transaction.purchaser]}
                </TableCell>


                <TableCell
                  align="left"
                  style={{
                    borderStyle: "solid",
                    borderColor: "#282c34",
                    borderWidth: "1px",
                    fontSize: "12px"
                  }}
                >
                  {transaction.people.map(person => {
                    
                    console.log(person.user);
                    return users[person.user] + ", ";})}
                </TableCell>
                
                
                <TableCell
                  align="center"
                  style={{
                    borderStyle: "solid",
                    borderColor: "#282c34",
                    borderWidth: "1px",
                    fontSize: "12px"
                  }}
                >
                  {transaction.totalPrice}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    borderStyle: "solid",
                    borderColor: "#282c34",
                    borderWidth: "1px",
                    fontSize: "12px"
                  }}
                >
                  {transaction.dateTime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
