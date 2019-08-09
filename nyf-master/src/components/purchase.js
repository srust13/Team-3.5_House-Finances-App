// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import Checkbox from "@material-ui/core/Checkbox";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import "./purchase.css";
// import MenuAppBar from "./navbar.js";
// import DatePicker from "react-datepicker";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   formControl: {
//     margin: theme.spacing(3)
//   }
// }));

// export default function CheckboxesGroup() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     gilad: true,
//     jason: false,
//     antoine: false
//   });

//   let testPeopleInitial = {
//     1: { name: "Chris", owesMoney: false, amtOwed: 0 },
//     2: { name: "Lisa", owesMoney: true, amtOwed: 0 },
//     3: { name: "Grace", owesMoney: false, amtOwed: 0 }
//   };

//   function updatePerson(id, newOwesMoney, newAmtOwed){
//     let tempTestPeople = testPeopleInitial;
//     tempTestPeople[id] = {name: testPeopleInitial[id].name, owesMoney: newOwesMoney, amtOwed: newAmtOwed}
//     return tempTestPeople;
//   }

//   const alteredTestPeople = React.useMemo(() =>{
//     return updatePerson(testPeopleInitial); 
//   },[updatePerson]);

//   const handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked });
//   };

//   const [checkboxes, setCheckboxes] = React.useState();

//   React.useEffect(() => {
//     //TODO READ IN USERS FROM DB
//     const tempCheckboxes = Object.keys(testPeople).map(personId => {
//       let person = testPeopleInital[personId];
//       console.log(person);
//       console.log(person.name);
//       console.log(person.owesMoney);
//       let personOwesMoney = person.owesMoney;
//       return (
//         <div className="checkbox_and_name">
//           <Checkbox
//             checked={person.owesMoney}
//             value={person.name}
//             onChange={handleCheckChange(e,personId)}
//           />
//           <p>{person.name}</p>
//         </div>
//       );
//     });

//     setCheckboxes(tempCheckboxes);
//   },[testPeople]);

//   const { gilad, jason, antoine } = state;
//   const error = [gilad, jason, antoine].filter(v => v).length !== 2;

//   return (
//     <div className="root">
//       <Grid container spacing={3}>
//         <Grid item xs={8}>
//           <div className="add_purchase_card_wrapper_div">
//             <Card>
//               <CardContent align="left">
//                 <Typography align="left" variant="h4">
//                   Add a Purchase for HOUSEHOLD_NAME
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//         </Grid>
//       </Grid>

//       <Grid container>
//         <Grid item>
//           <FormControl component="fieldset" className={classes.formControl}>
//             <FormLabel component="legend">Who do you want to charge?</FormLabel>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={gilad}
//                     onChange={handleChange("gilad")}
//                     value="gilad"
//                   />
//                 }
//                 label="Gilad sdfsd"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={jason}
//                     onChange={handleChange("jason")}
//                     value="jason"
//                   />
//                 }
//                 label="Jason Killian"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={antoine}
//                     onChange={handleChange("antoine")}
//                     value="antoine"
//                   />
//                 }
//                 label="Antoine Llorca"
//               />
//             </FormGroup>
//             <FormHelperText>Be careful</FormHelperText>
//           </FormControl>
//         </Grid>
//       </Grid>
//       {checkboxes}
//     </div>
//   );
// }
