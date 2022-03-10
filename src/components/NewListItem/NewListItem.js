import { useState } from "react";

const NewListItem = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newListData = {
      title: enteredTitle,
      description: enteredDescription,
    };
    props.onSaveListData(newListData);
    setEnteredTitle("");
    setEnteredDescription("");
  };

  //two way binding
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          value={enteredTitle}
          onChange={titleChangeHandler}
          type="text"
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          value={enteredDescription}
          onChange={descriptionChangeHandler}
          type="text"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default NewListItem;
