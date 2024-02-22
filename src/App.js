import InputSearch from "./componets/InputSearch/InputSearch";
import Header from "./componets/Header/Header";
import "./App.css";
import { TaskList } from "./componets/TaskList/TaskList";
//import { TaskListContextProvider } from "./context/TaskListContext";
import { Provider } from "react-redux";
//import store from "./store";
import rootReducer from "../src/store/index";
import { configureStore } from "@reduxjs/toolkit";

// function App() {
//   return (
//     <TaskListContextProvider>
//       <Header />
//       <InputSearch />
//       <TaskList />
//     </TaskListContextProvider>
//   );
// }

// export default App;
const store = configureStore({ reducer: rootReducer });
function App() {
  return (
    <Provider store={store}>
      <Header />
      <InputSearch />
      <TaskList />
    </Provider>
  );
}

export default App;
