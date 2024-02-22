import InputSearch from "./componets/InputSearch/InputSearch";
import Header from "./componets/Header/Header";
import "./App.css";
import { TaskList } from "./componets/TaskList/TaskList";
import { TaskListContextProvider } from "./context/TaskListContext";

function App() {
  return (
    <TaskListContextProvider>
      <Header />
      <InputSearch />
      <TaskList />
    </TaskListContextProvider>
  );
}

export default App;
