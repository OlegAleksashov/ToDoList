import React, { useContext } from "react";
import "./Task.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TaskListContext } from "../../context/TaskListContext";

const Task = ({ task, onDelete, onEdit }) => {
  const { setTasklist } = useContext(TaskListContext);

  return (
    <li>
      {task.isEditing ? (
        <input
          className="edittask"
          type="text"
          value={task.name}
          onChange={(e) => {
            const newName = e.target.value;
            setTasklist((prevTaskList) =>
              prevTaskList.map((prevTask) =>
                prevTask.id === task.id
                  ? { ...prevTask, name: newName }
                  : prevTask
              )
            );
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
