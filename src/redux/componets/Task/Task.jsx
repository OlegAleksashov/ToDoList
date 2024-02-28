import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import { updateTask } from "../../store/actions";
import "./Task.css";

const Task = ({ task, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.title);
  const [theme, setTheme] = useState("dark");
  const dispatch = useDispatch();

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onCheckBoxClicked = () => {
    if (!task.isCompleted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const onSaveClicked = () => {
    dispatch(updateTask(task.id, inputValue));
    setIsEditing(!isEditing);
  };

  const isEnterButtonClicked = (e) => {
    if (e.key === "Enter" && isEditing) {
      onSaveClicked();
    }
  };

  return (
    <li className={theme}>
      {isEditing ? (
        <input
          id="edittask"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={isEnterButtonClicked}
        />
      ) : (
        <>
          {task.number}
          <p>{task.title}</p>
          <Checkbox onClick={onCheckBoxClicked} />
        </>
      )}
      {!isEditing ? (
        <Button onClick={onEdit} variant="outlined" endIcon={<EditIcon />}>
          Edit
        </Button>
      ) : (
        <Button onClick={onSaveClicked} variant="outlined">
          Save
        </Button>
      )}
      <Button onClick={onDelete} variant="outlined" endIcon={<DeleteIcon />}>
        Remove
      </Button>
    </li>
  );
};

export default Task;
