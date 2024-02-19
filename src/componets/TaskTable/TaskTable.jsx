import React from "react";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import TaskList from "../TaskList/TaslList";
import { taskSearchResult } from "../../constant/mock";

const TaskTable = () => {
  return (
    <>
      <HeaderOfTaskList />
      <TaskList tasks={taskSearchResult}/>
    </>
  );
};

export default TaskTable;
