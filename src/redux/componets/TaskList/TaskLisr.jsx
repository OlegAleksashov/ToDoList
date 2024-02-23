import React from "react";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, addTask, editTask } from "../../../redux/store/actions";

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasklist = useSelector((state) => state.title.title);

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleAddTask = (title) => {
    dispatch(addTask(title));
  };

  const handleEdit = (id) => {
    dispatch(editTask(id));
  };

  return (
    <div>
      <InputTask addTask={handleAddTask} />
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
