import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./purchase.css";
import MenuAppBar from "./navbar.js";
import DatePicker from "react-datepicker";

const NewPurchase = props => {
    const[testPeople, setTestPeople]  = React.useState({
        1: { name: "Chris", owesMoney: false, amtOwed: 0 },
        2: { name: "Lisa", owesMoney: true, amtOwed: 0 },
        3: { name: "Grace", owesMoney: false, amtOwed: 0 }
    });
    const [checkboxes, setCheckboxes] = React.useState();
    
    React.useEffect(() => {console.log(testPeople) }, testPeople); 

    function updatePeople(personId, newName, newOwesMoney, newAmtOwed){
        let tempPeople = testPeople;
        tempPeople[personId] = {name: newName, owesMoney: newOwesMoney, amtOwed: newAmtOwed};
        console.log("updating people");
        setTestPeople(tempPeople);
    }

  React.useEffect(() => {
    //TODO READ IN USERS FROM DB
    const tempCheckboxes = Object.keys(testPeople).map(personId => {
      let person = testPeople[personId];
      console.log("hello");
      return (
        <div className="checkbox_and_name">
          <Checkbox
            checked={person.owesMoney}
            value={person.name}
            onChange={() => {
                setTestPeople({
                    1: { name: "Chris", owesMoney: false, amtOwed: 0 },
                    2: { name: "Lisa", owesMoney: true, amtOwed: 0 },
                    3: { name: "Grace", owesMoney: false, amtOwed: 0 }
                });
                updatePeople(personId, person.name, person.wwesMoney, person.amtOwed)}}
          />
          <p>{person.name}</p>
        </div>
      );
    });

    setCheckboxes(tempCheckboxes);
    console.log(tempCheckboxes);

  },[testPeople]);

  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div className="add_purchase_card_wrapper_div">
            <Card>
              <CardContent align="left">
                <Typography align="left" variant="h4">
                  Add a Purchase for HOUSEHOLD_NAME
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      {checkboxes}
    </div>
  );
};

export default NewPurchase;