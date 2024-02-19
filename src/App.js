import TaskTable from "./componets/TaskTable/TaskTable";
import InputTask from "./componets/InputTask/InputTask";
import InputSearch from "./componets/InputSearch/InputSearch";
import Header from "./componets/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <InputSearch />
      <InputTask />
      <TaskTable />
    </>
  );
}

export default App;
