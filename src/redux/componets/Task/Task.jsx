import React, { useState } from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions";

const Task = ({ task, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.title);
  const dispatch = useDispatch();

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSaveClicked = () => {
    dispatch(updateTask(task.id, inputValue));
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          id="edittask"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      ) : (
        <>
          {task.number}
          <p>{task.title}</p>
          {task.isCompleted}
          {task.status}
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
