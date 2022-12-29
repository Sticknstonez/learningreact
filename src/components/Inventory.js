import InventoryDate from "./InventoryDate";
import "./Inventory.css";
import Card from "./Card";

function Inventory(props) {
  return (
    <Card className="inventory-item">
      <InventoryDate date={props.date} />
      <div className="inventory-item__description">
        <h2>{props.model}</h2>
        <div className="inventory-item__serial">{props.serial}</div>
      </div>
    </Card>
  );
}

export default Inventory;
