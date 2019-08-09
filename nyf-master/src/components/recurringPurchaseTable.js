import React , {Component}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(purchaser, item, price, cycle) {
  return { purchaser, item, price, cycle };
}

const rows = [
  createData('Hannah Huh', "Toilet paper", "$10", "monthly"),
  createData('Daniel Knorr', "Coffee", "$20", "monthly"),
  createData('Daniel Knorr', "Bleach", "$10", "monthly"),
  createData('Andrew Gao', 'Amazon Prime', "$100", "yearly")
];

export default class SimpleTable extends Component {
  constructor(props) {
    super(props);
  }

  render() 
  {

    return (
      
      <Paper >
        <Table style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px'}}>
          <TableHead>
            <TableRow>
              <TableCell style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Purchaser</TableCell>
              <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Item</TableCell>
              <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Price</TableCell>
              <TableCell align="center" borderColor = "black" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '14px', color: '#282c34', fontWeight: 'bold'}}>Recurrence Period</TableCell>
  
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell align ="left" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.purchaser}</TableCell>
                <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.item}</TableCell>
                <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.price}</TableCell>
                <TableCell align="center" style={{ borderStyle: 'solid', borderColor: '#282c34', borderWidth: '1px', fontSize: '12px'}}>{row.cycle}</TableCell>
  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );

  }

};
