import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import NewListItem from "./components/NewListItem/NewListItem";
function App() {
  const saveListData = (newListItem) => {
    console.log("IN APP", newListItem);
  };
  const list = [
    { title: "Intellectual", description: "Task for my left brain" },
    { title: "Physical", description: "Tasks for keeping fit" },
    { title: "Creativity", description: "Task for my right brain" },
  ];
  return (
    <div className="App">
      <List list={list} />
      <NewListItem onSaveListData={(neewListData) => saveListData} />
    </div>
  );
}

export default App;
