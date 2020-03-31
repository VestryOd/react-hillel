import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ThemeContext from "./ThemeContext";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import "./TasksList.component.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 750,
    margin: "0 auto"
  },
  taskTitle: {
    cursor: "pointer"
  },
  tableHeader: {
    fontWeight: "600"
  }
});

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function TasksList(props) {
  const theme = useContext(ThemeContext);
  const classes = useStyles();
  const list = [...props.list];

  return (
    <TableContainer component={Paper} className={theme}>
      <Table className={classes.table} size="small" aria-label="Todo list">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableHeader}>
              Task
            </TableCell>
            <TableCell align="center" className={classes.tableHeader}>
              Completed
            </TableCell>
            <TableCell align="center" className={classes.tableHeader}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(row => (
            <TableRow key={row.id}>
              <TableCell
                align="left"
                onClick={() => props.onToggle(row)}
                className={classes.taskTitle}
              >
                {row.title}
              </TableCell>
              <TableCell align="center">
                <FormControlLabel
                  disabled
                  control={
                    <GreenCheckbox checked={row.completed} name="completed" />
                  }
                />
              </TableCell>
              <TableCell align="center">
                <Button color="primary">
                  <DeleteIcon onClick={() => props.onRemove(row.id)} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}