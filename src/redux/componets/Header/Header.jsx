import React from "react";
import "./Header.css";

const Header = () => {
  let dateTemp = new Date().toString().split(" ");
  const date = dateTemp[1] + " " + dateTemp[2] + " " + dateTemp[3];

  return (
    <header>
      <div className="date">{date}</div>
      <span>TODO LIST APP</span>
    </header>
  );
};

export default Header;
