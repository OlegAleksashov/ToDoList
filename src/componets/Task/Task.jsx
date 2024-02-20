import React from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ description, onDelete, onEdit, completed, number }) => {
  return (
    <li>
      {number}
      <p>
        <strong>{description}</strong>
      </p>
      {completed}
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
