import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import { completeTask, updateTask } from "../../store/actions";
import "./Task.css";

const Task = ({ task, onDelete }) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("dark");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.title);

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onCheckBoxClicked = () => {
    dispatch(completeTask(task.id, !task.isCompleted));
    setTheme(theme === "light" ? "dark" : "light");
  };

  const onSaveClicked = () => {
    dispatch(updateTask(task.id, inputValue));
    setIsEditing(!isEditing);
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && isEditing) {
              onSaveClicked();
            }
          }}
        />
      ) : (
        <>
          {task.number}
          <p>{task.title}</p>
          <Checkbox onClick={onCheckBoxClicked} />
        </>
      )}
      {!isEditing ? (
        <Button
          onClick={onEdit}
          variant="outlined"
          disabled={theme === "light"}
          endIcon={<EditIcon />}
        >
          Edit
        </Button>
      ) : (
        <Button onClick={onSaveClicked} variant="outlined">
          Save
        </Button>
      )}
      <Button
        onClick={onDelete}
        variant="outlined"
        disabled={theme === "light"}
        endIcon={<DeleteIcon />}
      >
        Remove
      </Button>
    </li>
  );
};

export default Task;
