import React from "react";
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import './HeaderOfTaskList.css'

const HeaderOfTaskList = () => {
  return (
    <div className="header">
      <Grid3x3OutlinedIcon />
      <span><strong>Task name</strong></span>
      <span><strong>Status</strong></span>
      <span><strong>Edit</strong></span>
      <span><strong>Remove</strong></span>
    </div>
  );
};

export default HeaderOfTaskList;
