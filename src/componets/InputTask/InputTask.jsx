import React from "react";
import "./InputTask.css";
import Button from "@mui/material/Button";

const InputTask = () => {
  return (
    <section className="sectioninput">
      <input type="text" className="control"></input>
      <Button variant="outlined" >
        Add Task
      </Button>
    </section>
  );
};

export default InputTask;
