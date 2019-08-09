import React , {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuAppBar from "./components/navbar.js";
import SimpleTable from "./components/oweTable.js";

import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./components/login.js";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Headline2 from "./components/Headline.js";
import RecurringPurchaseTable from "./components/recurringPurchaseTable.js";
import Paper from "@material-ui/core/Paper";
import { blueGrey } from "@material-ui/core/colors";
import CheckboxesGroup from "./components/purchase";
import NewPurchase from "./components/purchase3.js";

const axios = require("axios");
const cycleStrings = ["daily", "weekly", "monthly", "yearly", "annually"]

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: {},
      curPeople: [],
      ids: []
    };
  }

  componentDidMount(){
    axios
      .get("https://us-central1-notyourfamily-ses.cloudfunctions.net/widgets/house/tOvFcMKwBEnzttFbnAju")
      .then((response) => {
        // handle success 
        this.setState({
          data: response.data
        })
        return response.data
      }).then(data => {
        let peopleIds = data.people;
        peopleIds.forEach(person => {
          let link = "https://us-central1-notyourfamily-ses.cloudfunctions.net/widgets/user/" + person
          axios.get(link).then(res => {
            let name = res.data.firstName + " " + res.data.lastName
            this.setState({ ids: [...this.state.ids, person]})
            this.setState({ curPeople: [...this.state.curPeople, name]})
          })
        })
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    }

    render(){

      return (
        <div className="App">
          <MenuAppBar />

          <Grid container spacing={3}>
            <Grid item xs>
              <div className="household_card_wrapper_div">
                <Card className="household_card">
                  <CardContent align="left">
                    <Typography
                      className="household_title"
                      align="left"
                      variant="h4"
                    >
                      Household: Not Your Family Team
                    </Typography>
                    <hr />
                    <p>Billing Cycle: {cycleStrings[this.state.data.billingCycle]}</p>
                    <p>The Current Billing Cycle Began: {this.state.data.billingStart}</p>
                    <p>Household Members: {this.state.curPeople.join(", ")}</p>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item l xs={9}>
              <div className="purchase_owed_card">
                <Card>
                  <CardContent align="left">
                    <div className="purchases_owed_label">
                      <Typography align="left" variant="h5">
                        Household Transactions
                      </Typography>{" "}
                    </div>

                    <div className="purchase_owed_table">
                      <SimpleTable transactionIds = {this.state.data.transactions}/>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={9}>
              <div className="purchase_owed_card">
                <Card>
                  <CardContent align="left">
                    <div className="purchases_owed_label">
                      <Typography align="left" variant="h5">
                        Recurring Purchases
                      </Typography>
                    </div>
                    <div className="purchase_owed_table">
                      <RecurringPurchaseTable />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>

          <NewPurchase transactionIds =  {this.state.data.transactions} />
        </div>
     
  );
    }
}

