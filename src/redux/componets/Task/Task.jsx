import React from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions";

const Task = ({ task, onDelete, onEdit }) => {
  const dispatch = useDispatch();
  // const tasklist = useSelector((state) => state.change.title);

  return (
    <li>
      {task.isEditing ? (
        <input
          className="edittask"
          type="text"
          value={task.name}
          onChange={(e) => {
            const newName = e.target.value;
            dispatch(updateTask({ id: task.id, newName: newName }));
          }}
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
