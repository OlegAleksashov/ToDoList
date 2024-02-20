import React, { useState } from "react";
import "./InputTask.css";
import Button from "@mui/material/Button";

const InputTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (value) {
      addTask(value);
    }
    setValue("");
  };

  return (
    <section className="sectioninput">
      <input
        value={value}
        type="text"
        className="control"
        placeholder="What are you gonna do?"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <Button variant="outlined" onClick={handleChange}>
        Add Task
      </Button>
    </section>
  );
};

export default InputTask;
