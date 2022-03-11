import { useState } from "react";
import "./ListPage.css";
import NewListItem from "../../components/NewListItem/NewListItem";
import List from "../../components/List/List";

const INITIAL_DUMMY_DATA = [
  { title: "Intellectual", description: "Task for my left brain" },
  { title: "Physical", description: "Tasks for keeping fit" },
  { title: "Creativity", description: "Task for my right brain" },
];

const ListPage = () => {
  const [taskList, setTaskList] = useState(INITIAL_DUMMY_DATA);
  const saveListData = (newListItem) => {
    setTaskList((prevState) => [newListItem, ...prevState]);
  };
  return (
    <div className="list-page-container">
      <List list={taskList} />
      <NewListItem onSaveListData={saveListData} />
    </div>
  );
};
export default ListPage;
