import React from "react";
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import "./HeaderOfTaskList.css";

const HeaderOfTaskList = () => {
  return (
    <div className="header">
      <Grid3x3OutlinedIcon />
      <span>Task name</span>
      <span>Status</span>
      <span>Edit</span>
      <span>Remove</span>
    </div>
  );
};

export default HeaderOfTaskList;
