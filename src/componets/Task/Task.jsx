import React from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ name, onDelete, onEdit, isCompleted, number, isEditing, status }) => {
  return (
    <li>
      {isEditing ? (
        <input type="text" value={name} onChange={(e) => e.target.value} />
      ) : (
        <>
          {number}
          <p>{name}</p>
          {isCompleted}
          {status}
        </>
      )}

      <Button onClick={onEdit} variant="outlined" endIcon={<EditIcon />}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button onClick={onDelete} variant="outlined" endIcon={<DeleteIcon />}>
        Remove
      </Button>
    </li>
  );
};

export default Task;
