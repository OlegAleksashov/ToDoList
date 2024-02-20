import React, { useState } from "react";
import Task from "../Task/Task";
import "./TaskList.css";
import { v4 as uuidv4 } from "uuid";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";

const TaskList = () => {
  const [tasklist, setTasklist] = useState([]);

  //useEffect(() => {}, [tasklist]);

  const addTask = (task) => {
    setTasklist([
      ...tasklist,
      {
        id: uuidv4(),
        description: task,
        completed: true,
        status: false,
        number: 1,
      },
    ]);
    console.log(tasklist);
  };

  const handleDelete = (id) => {
    setTasklist(tasklist.filter((task) => task.id !== id));
  };
  // const handleDelete = (index) => {
  //   setTasklist(tasklist.filter((item, i) => i !== index));
  // };?????????????????

  const handleEdit = (id) => {
    const updatedTasks = tasklist.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTasklist(updatedTasks);
  };

  return (
    <div>
      <InputTask addTask={addTask} />
      <HeaderOfTaskList />
      <ul>
        {tasklist.map((task) => (
          <Task
            number={task.number++}
            key={task.id}
            description={task.description}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
