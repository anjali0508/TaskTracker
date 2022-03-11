import ListItem from "../ListItem/ListItem";
import "./List.css";
const List = (props) => {
  return (
    <div className="list-container">
      {props.list.map((item, index) => (
        <ListItem
          key={index}
          title={item.title}
          description={item.description}
        ></ListItem>
      ))}
    </div>
  );
};
export default List;
