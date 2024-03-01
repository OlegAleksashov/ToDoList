import React, { useState } from "react";
import "./InputTask.css";
import Button from "@mui/material/Button";

const InputTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = () => {
    if (value) {
      addTask(value);
    }
    setValue("");
  };

  const isEnterButtonClicked = (e) => {
    if (e.key === "Enter") {
      addTask(value);
      setValue("");
    }
  };

  return (
    <div className="sectioninput">
      <input
        value={value}
        type="text"
        id="typetask"
        placeholder="What are you gonna do?"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={isEnterButtonClicked}
      />
      <Button variant="outlined" onClick={handleChange}>
        Add Task
      </Button>
    </div>
  );
};

export default InputTask;
