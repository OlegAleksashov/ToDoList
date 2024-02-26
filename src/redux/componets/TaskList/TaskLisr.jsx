import React from "react";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, addTask } from "../../../redux/store/actions";
import "./TaskList.css";

export const TaskList = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasklist);

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleAddTask = (tasklist) => {
    dispatch(addTask(tasklist));
  };

  return (
    <div>
      <InputTask addTask={handleAddTask} />
      <HeaderOfTaskList />
      <ul>
        {task.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};
