import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export default function MenuAppBar() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    input: {
      display: "none"
    },
    junkDiv: {
      flexGrow: 1,
    },
    appBar: {
      background: "#2196f3"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Button edge = "start"
            onClick={() => {
              return;
            }} // TODO ADD IN ROUTING
            variant="contained"
            color="primary"
            className={classes.menuButton}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              return;
            }} // TODO ADD IN ROUTING
            variant="contained"
            color="primary"
            className={classes.menuButton}
          >
            Add Purchase
          </Button>
          <div className = {classes.junkDiv}></div>
          <Button
            onClick={() => {
              return;
            }} // TODO ADD IN ROUTING
            align="right"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
