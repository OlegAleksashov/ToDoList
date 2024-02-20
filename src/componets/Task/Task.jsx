import React from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ description, onDelete, onEdit, toggleComplete }) => {
  return (
    <li>
      <p onClick={() => toggleComplete(description.id)}>
        <strong>{description.description}</strong>
      </p>
      {description.description}
      <Button onClick={onEdit} variant="outlined" endIcon={<EditIcon />}>
        Edit
      </Button>
      <Button onClick={onDelete} variant="outlined" endIcon={<DeleteIcon />}>
        Remove
      </Button>
    </li>
  );
};

export default Task;
