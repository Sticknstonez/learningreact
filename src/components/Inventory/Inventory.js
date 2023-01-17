import InventoryDate from "./InventoryDate";
import "./Inventory.css";
import Card from "../UI/Card";

const Inventory = (props) => {

  // const [model, setModel] = useState(props.model);
  
  // const clickHandler = () => {
  //   setModel('Updated!');
  // };

  return (
    <li>
    <Card className="inventory-item">
      <InventoryDate date={props.date} />
      <div className="inventory-item__description">
        <h2>{props.model}</h2>
        <div className="inventory-item__serial">{props.serial}</div>
      </div>
      {/* <button onClick={clickHandler}>Update Model</button> */}
    </Card>
    </li>
  );
}

export default Inventory;
