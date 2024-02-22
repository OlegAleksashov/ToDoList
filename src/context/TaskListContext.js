import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

export const TaskListContextProvider = ({ children }) => {
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
    <TaskListContext.Provider
      value={{ tasklist, setTasklist, addTask, handleDelete, handleEdit }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
