import { useState } from "react";
import "./ListItem.css";

// default exports named exports
// hooks - rendeering
// cclass - state - functions - hooks - usestate, useeffect, usecontext
const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default ListItem;

// V-DOM
