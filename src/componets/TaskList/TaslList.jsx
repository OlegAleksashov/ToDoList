import React from "react";
import { taskSearchResult } from "../../constant/mock";
import Task from "../Task/Task";
import './TaskList.css'

const TaslList = () => {
  return (
    <div>
      <ul>
        {taskSearchResult.map((element, index) => (
          <Task
            key={index}
            number={element.number}
            description={element.description}
            status={element.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaslList;
