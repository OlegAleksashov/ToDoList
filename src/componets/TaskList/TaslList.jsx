import React, { useState } from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaslList = ({ tasks }) => {
  const [tasklist, setTasklist] = useState(tasks);

  const handleDelete = (index) => {
    const updatedTasks = tasklist.filter((item, i) => i !== index);
    setTasklist(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasklist.map((element, index) => (
          <Task
            key={index}
            number={element.number}
            description={element.description}
            status={element.status}
            onDelete={() => {
              handleDelete(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaslList;
