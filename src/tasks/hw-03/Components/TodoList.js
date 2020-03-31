import React, { useState, useEffect, useCallback } from "react";
import Loading from "./Loading";
import TasksList from "./TasksList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "./Modal";
import DataApi from "./DataApi";

function TodoList() {
  let [tasks, setTasks] = useState([]);
  let [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTsk = useCallback(
    values => {
      console.log(values);
      DataApi.post(`/todos`, values).then(response => {
        setTasks([{ ...values }, ...tasks]);
        handleClose();
      });
    },
    [tasks]
  );

  const handleRemoveTask = useCallback(
    id => {
      console.log(id);
      DataApi.delete(`/todos/${id}`).then(response => {
        const restTasks = tasks.filter(el => el.id !== id);
        setTasks([...restTasks]);
      });
    },
    [tasks]
  );

  const handleToggleCompleteTask = useCallback(
    task => {
      console.log(task);
      DataApi.patch(`/todos/${task.id}`, { completed: !task.completed }).then(
        response => {
          const updatedTask = response.data;
          setTasks(
            tasks.map(el => (el.id === updatedTask.id ? updatedTask : el))
          );
        }
      );
    },
    [tasks]
  );

  useEffect(() => {
    setLoading(true);
    // DataApi.get("/todos")
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
        setTasks(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Modal
          open={open}
          handleClose={handleClose}
          handleSave={handleAddTsk}
        />
        <Fab
          color="secondary"
          aria-label="add"
          id="add-button"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <TasksList
          list={tasks}
          onRemove={handleRemoveTask}
          onToggle={handleToggleCompleteTask}
        />
      </div>
    );
  }
}

export default TodoList;