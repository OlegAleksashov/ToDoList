import React, { useContext } from "react";
import { TaskListContext } from "../../context/TaskListContext";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import Task from "../Task/Task";

export const TaskList = () => {
  const { handleDelete, handleEdit, addTask, tasklist } =
    useContext(TaskListContext);
  return (
    <div>
      <InputTask addTask={addTask} />
      <HeaderOfTaskList />
      <ul>
        {tasklist.map((task) => (
          <Task
            task={task}
            key={task.id}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};
