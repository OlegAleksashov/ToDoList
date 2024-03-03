import React, { useState, useEffect } from "react";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, addTask } from "../../store/actions";
import InputSearch from "../InputSearch/InputSearch";
import useInput from "../../hooks/useInput";
import "./TaskList.css";

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasklist);
  const input = useInput();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) =>
    typeof task.title === "string" &&
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isTaskListEmpty = filteredTasks.length === 0;

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleAddTask = (tasklist) => {
    dispatch(addTask(tasklist));
  };

  return (
    <div>
      <InputTask addTask={handleAddTask} />
      <InputSearch onInputChange={handleInputChange} />
      <HeaderOfTaskList />
      {!isTaskListEmpty ? (
        <ul>
          {filteredTasks
            .filter((task) =>
              task.title.toLowerCase().includes(input.value.toLowerCase())
            )
            .map((task) => (
              <Task
                task={task}
                key={task.id}
                onDelete={() => handleDelete(task.id)}
              />
            ))}
        </ul>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
