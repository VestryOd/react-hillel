import React, { useState } from "react";
import Todolist from "./Components/TodoList";
import Fab from "@material-ui/core/Fab";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import ThemeContext from "./Components/ThemeContext";
import "./Homework03.css";

export default function Homework03() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <Fab
          color="default"
          aria-label="Brightness6"
          id="theme-button"
          onClick={changeTheme}
        >
          <Brightness6Icon />
        </Fab>
        <Todolist />
      </div>
    </ThemeContext.Provider>
  );
}
