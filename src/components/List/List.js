import ListItem from "../ListItem/ListItem";
import "./List.css";
const List = (props) => {
  return (
    <div className="list-container">
      <ListItem
        title={props.list[0].title}
        description={props.list[0].description}
      ></ListItem>
      <ListItem
        title={props.list[1].title}
        description={props.list[1].description}
      ></ListItem>
      <ListItem
        title={props.list[2].title}
        description={props.list[2].description}
      ></ListItem>
    </div>
  );
};
export default List;
