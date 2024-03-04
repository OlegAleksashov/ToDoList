import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const tasks = useSelector((state) => state.tasklist);
  let dateTemp = new Date().toString().split(" ");
  const date = dateTemp[1] + " " + dateTemp[2] + " " + dateTemp[3];

  return (
    <header>
      <div className="date">{date}</div>
      <span>TODO LIST APP</span>
      <div className="list">
        <div className="date">Total amount of tasks: {tasks.length}</div>
        <div className="date">Completed tasks: {}</div>
      </div>
    </header>
  );
};

export default Header;
