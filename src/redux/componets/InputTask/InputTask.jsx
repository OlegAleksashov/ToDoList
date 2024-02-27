import React, { useState } from "react";
import "./InputTask.css";
import Button from "@mui/material/Button";

const InputTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    //e.preventDefault(); ?????
    // if (e === "Enter") {
    //   addTask(value);
    // } I wanted to add an event listener that has to react when user presses 'Enter' key
    if (value) {
      addTask(value);
    }
    setValue("");
  };

  return (
    <div className="sectioninput">
      <input
        value={value}
        type="text"
        id="typetask"
        placeholder="What are you gonna do?"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="outlined" onClick={handleChange}>
        Add Task
      </Button>
    </div>
  );
};

export default InputTask;
