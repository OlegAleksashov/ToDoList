import React from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Stack from "@mui/material/Stack";
// <Stack direction="row" spacing={2}>
// </Stack>

const Task = ({ number, description, status, onDelete }) => {
  return (
    <li>
      {number}
      <p>
        <strong>{description}</strong>
      </p>
      {status}
      <Button variant="outlined" endIcon={<EditIcon />}>
        Edit
      </Button>
      <Button
        onClick={onDelete}
        variant="outlined"
        endIcon={<DeleteIcon />}
      >
        Remove
      </Button>
    </li>
  );
};

export default Task;
