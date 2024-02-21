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
        name: task,
        isCompleted: false,
        isEditing: false,
        status: "To do",
        number: tasklist.length + 1,
      },
    ]);
    console.log(tasklist);
  };

  const handleDelete = (id) => {
    setTasklist(tasklist.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    setTasklist(
      tasklist.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <InputTask addTask={addTask} />
      <HeaderOfTaskList />
      <ul>
        {tasklist.map((task) => (
          <Task
            number={task.number}
            key={task.id}
            name={task.name}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
            isCompleted={task.isCompleted}
            isEditing={task.isEditing}
            status={task.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
