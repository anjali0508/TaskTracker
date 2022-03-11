import logo from "./logo.svg";
import "./App.css";
import ListPage from "./container/ListPage/ListPage";
import TaskPage from "./container/TaskPage/TaskPage";
// import { Router } from "react-router-dom";

function App() {
  const setMyTaskPage = false;
  return (
    <div className="App">
      {/* {setMyTaskPage ? <TaskPage></TaskPage> : <ListPage></ListPage>} */}
      <TaskPage></TaskPage>
      {/* <ListPage></ListPage> */}
    </div>
  );
}

export default App;
