import React from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <li>
      {task.isEditing ? (
        <input
          className="edittask"
          type="text"
          value={task.name}
          onChange={(e) => (task.name += e.target.value)}
        />
      ) : (
        <>
          {task.number}
          <p>{task.name}</p>
          {task.isCompleted}
          {task.status}
        </>
      )}

      <Button onClick={onEdit} variant="outlined" endIcon={<EditIcon />}>
        {task.isEditing ? "Save" : "Edit"}
      </Button>
      <Button onClick={onDelete} variant="outlined" endIcon={<DeleteIcon />}>
        Remove
      </Button>
    </li>
  );
};

export default Task;
