import React, { Component } from "react";
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
import "./purchase3.css";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

export default class NewPurchase extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      itemName: "",
      isRecurring: false,
      recurringVal: -1,
      people: {
        1: { name: "Chris", owesMoney: false, amtOwed: 0 },
        2: { name: "Lisa", owesMoney: false, amtOwed: 0 },
        3: { name: "Grace", owesMoney: false, amtOwed: 0 }
      }
    };
  }

  async handler(
    personId,
    newOwesMoney,
    newAmtOwed,
    newItemName,
    newIsRecurring,
    newRecurringVal,
    newDate,
    switchCode
  ) {
    let updatedPeople = this.state.people;
    let person;

    console.log("ENTERED HANDLER");

    switch (switchCode) {
      case "PERSON":
        person = this.state.people[personId];
        updatedPeople[personId] = {
          name: person.name,
          owesMoney: newOwesMoney,
          amtOwed: person.amtOwed
        };
        await this.setState({
          people: updatedPeople,
          itemName: this.state.itemName,
          isRecurring: this.state.isRecurring,
          recurringVal: this.state.recurringVal,
          date: this.state.date
        });
        break;
      case "AMT":
        person = this.state.people[personId];
        updatedPeople[personId] = {
          name: person.name,
          owesMoney: person.owesMoney,
          amtOwed: newAmtOwed
        };
        await this.setState({
          people: updatedPeople,
          itemName: this.state.itemName,
          isRecurring: this.state.isRecurring,
          recurringVal: this.state.recurringVal,
          date: this.state.date
        });
        break;
      case "CYCLE_VAL":
        await this.setState({
          people: this.state.people,
          itemName: this.state.itemName,
          isRecurring: this.state.isRecurring,
          recurringVal: newRecurringVal,
          date: this.state.date
        });
        break;
      case "IS_RECURRING":
        console.log("IS_RECURRING");
        console.log(newIsRecurring);

        if (newIsRecurring) {
          await this.setState({
            people: this.state.people,
            itemName: this.state.itemName,
            isRecurring: true,
            recurringVal: this.state.recurringVal,
            date: this.state.date
          });
        } else {
          await this.setState({
            people: this.state.people,
            itemName: this.state.itemName,
            isRecurring: false,
            recurringVal: this.state.recurringVal,
            date: this.state.date
          });
        }
        break;
      case "DATE":
        await this.setState(this.state);
        break;
      case "DEFAULT":
        await this.setState({
          itemName: "",
          isRecurring: false,
          recurringVal: -1,
          people: {
            1: { name: "Chris", owesMoney: false, amtOwed: 0 },
            2: { name: "Lisa", owesMoney: false, amtOwed: 0 },
            3: { name: "Grace", owesMoney: false, amtOwed: 0 }
          },
          date: ""
        });
        console.log("Here");
        break;
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Checkboxes handler={this.handler} people={this.state.people} />;
      </div>
    );
  }
}

class Checkboxes extends React.Component {
  render() {
    const checkboxes = Object.keys(this.props.people).map(id => {
      let person = this.props.people[id];

      return (
        <div className="checkbox_and_name">
          <Checkbox
            value={person.name}
            onChange={(event, checked) =>
              this.props.handler(
                id,
                checked,
                person.amtOwed,
                "",
                false,
                -1,
                "",
                "PERSON"
              )
            }
          />
          <p className="person_name">{person.name}</p>
          <TextField
            type="number"
            onChange={event => {
              this.props.handler(
                id,
                person.owesMoney,
                parseInt(event.target.value),
                "",
                false,
                -1,
                "",
                "AMT"
              );
            }}
          />
        </div>
      );
    });

    return (
      <div className="root">
        <Grid container>
          <Grid>
            <div className="submit_form">
              <Card>
                <CardContent align="left">
                  <Grid container>
                    <Grid>
                      <div className="grid_item">
                        <Typography align="left" variant="h5">
                          Add a Purchase for Not Your Family
                        </Typography>
                        <hr />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid>
                      <div className="grid_item">
                        <Typography align="left" variant="h6">
                          Billing Cycle:
                        </Typography>
                        <Select
                          onChange={event => {
                            console.log(event.target.value);
                            this.props.handler(
                              "",
                              false,
                              -1,
                              "",
                              false,
                              event.target.value,
                              "",
                              "CYCLE_VAL"
                            );
                          }}
                        >
                          <MenuItem value={0}>Daily</MenuItem>
                          <MenuItem value={1}>Monthly</MenuItem>
                          <MenuItem value={2}>Yearly</MenuItem>
                        </Select>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid>
                      <div className="grid_item">
                        <Typography align="left" variant="h6">
                          Recurrent Purchase?
                        </Typography>
                        <Checkbox
                          onChange={(event, checked) => {
                            this.props.handler(
                              "",
                              false,
                              -1,
                              "",
                              checked,
                              -1,
                              "",
                              "IS_RECURRING"
                            );
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid>
                      <div className="grid_item">
                        <Typography align="left" variant="h6">
                          Item Description:
                        </Typography>
                        <TextField
                          onChange={event => {
                            this.props.handler(
                              0,
                              false,
                              -1,
                              "",
                              false,
                              -1,
                              event.target.value,
                              "DATE"
                            );
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  {checkboxes}

                  <Grid container>
                    <Grid>
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            console.log("clicked");
                            // form new (default) state

                            this.props.handler(
                              "",
                              false,
                              -1,
                              "",
                              false,
                              -1,
                              "",
                              "DEFAULT"
                            );
                          }} // TODO ADD IN ROUTING
                        >
                          Submit Purchase
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
