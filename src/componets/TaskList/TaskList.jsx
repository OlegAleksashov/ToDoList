// import React, { createContext, useState } from "react";
// import Task from "../Task/Task";
// import "./TaskList.css";
// import { v4 as uuidv4 } from "uuid";
// import InputTask from "../InputTask/InputTask";
// import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";

// export const TaskListContext = createContext();

// const TaskList = ({ children }) => {
//   const [tasklist, setTasklist] = useState([]);

//   const addTask = (task) => {
//     setTasklist([
//       ...tasklist,
//       {
//         id: uuidv4(),
//         name: task,
//         isCompleted: false,
//         isEditing: false,
//         status: "To do",
//         number: tasklist.length + 1,
//       },
//     ]);
//     console.log(tasklist);
//   };

//   const handleDelete = (id) => {
//     setTasklist(tasklist.filter((task) => task.id !== id));
//   };

//   const handleEdit = (id) => {
//     setTasklist(
//       tasklist.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };

//   return (
//     <TaskListContext.Provider value={{ setTasklist }}>
//       <InputTask addTask={addTask} />
//       <HeaderOfTaskList />
//       <ul>
//         {tasklist.map((task) => (
//           <Task
//             task={task}
//             key={task.id}
//             onEdit={() => handleEdit(task.id)}
//             onDelete={() => handleDelete(task.id)}
//           />
//         ))}
//       </ul>
//       {children}
//     </TaskListContext.Provider>
//   );
// };

// export default TaskList;
import React, { useContext } from "react";
import { TaskListContext } from "../../context/TaskListContext";
import InputTask from "../InputTask/InputTask";
import HeaderOfTaskList from "../HeaderOfTaskList/HeaderOfTaskList";
import Task from "../Task/Task";

export const TaskList = () => {
  const { handleDelete, handleEdit, addTask, tasklist } =
    useContext(TaskListContext);
  return (
    <div>
      <InputTask addTask={addTask} />
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
