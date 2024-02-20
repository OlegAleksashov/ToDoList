import React, { useState } from "react";
import Task from "../Task/Task";
import "./TaskList.css";
import { v4 as uuidv4 } from "uuid";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";

const TaskList = () => {
  const [tasklist, setTasklist] = useState([]);

  const addTask = (task) => {
    setTasklist([
      ...tasklist,
      {
        id: uuidv4(),
        description: task,
        isEditing: false,
        completed: false,
        status: false,
      },
    ]);
    console.log(tasklist);
  };
  const toggleComplete = (id) => {
    setTasklist(
      tasklist.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    const updatedTasks = tasklist.filter((item, i) => i !== id);
    setTasklist(updatedTasks);
  };

  const handleEdit = (id) => {
    const updatedTasks = tasklist.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTasklist(updatedTasks);
    console.log("!!!!");
  };

  return (
    <div>
      <InputTask addTask={addTask} />
      <HeaderOfTaskList />
      <ul>
        {tasklist.map((task) => (
          <Task
            key={task.id}
            description={task.description}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
            toggleComplete={() => toggleComplete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
