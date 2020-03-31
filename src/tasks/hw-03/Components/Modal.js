import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DataApi from './DataApi';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function FormDialog(props) {
  const [users, setUsers] = useState([]);

  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleUserChange = event => {
    setUser(event.target.value);
  };

  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, write a new Task and select User, to whom it will be
            addressed.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            fullWidth
            onChange={handleTitleChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
              id="demo-simple-select"
              value={user}
              onChange={handleUserChange}
            >
              {users.map(user => {
                return (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleClose()} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() =>
              props.handleSave({
                title,
                user,
                completed: false,
                id: new Date()
              })
            }
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
