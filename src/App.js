// import InputSearch from "./react/componets/InputSearch/InputSearch";
// import Header from "./react/componets/Header/Header";
// import "./App.css";
// import { TaskList } from "./react/componets/TaskLIist/TaskList";
// import { TaskListContextProvider } from "./react/context/TaskListContext";

//  function App() {
//    return (
//      <TaskListContextProvider>
//        <Header />
//        <InputSearch />
//        <TaskList />
//      </TaskListContextProvider>
//    );
//  }

//  export default App;

import InputSearch from "../src/redux/componets/InputSearch/InputSearch";
import Header from "../src/redux/componets/Header/Header";
import "./App.css";
import { TaskList } from "../src/redux/componets/TaskList/TaskLisr";
import { Provider } from "react-redux";
import store from "../src/redux/store/index";

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
