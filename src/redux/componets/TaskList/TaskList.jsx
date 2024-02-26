import React from "react";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, addTask } from "../../store/actions";
import "./TaskList.css";

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasklist);

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
        {tasks.map((task) => (
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
