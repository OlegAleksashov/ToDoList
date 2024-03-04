import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const tasks = useSelector((state) => state.tasklist);
  let dateTemp = new Date().toString().split(" ");
  const date = dateTemp[1] + " " + dateTemp[2] + " " + dateTemp[3];

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  return (
    <header>
      <div className="date">{date}</div>
      <span>TODO LIST APP</span>
      <div className="list">
        <div className="date">Total amount of tasks: {tasks.length}</div>
        <div className="date">Completed tasks: {completedTasksCount}</div>
      </div>
    </header>
  );
};

export default Header;
