import Card from "./Card";
import Inventory from "./Inventory";
import './InventoryTracker.css';

function InventoryTracker(props) {
  return (
    <Card className="tracker">
      <Inventory
        model={props.inventories[0].model}
        serial={props.inventories[0].serial}
        date={props.inventories[0].date}
      />
      <Inventory
        model={props.inventories[1].model}
        serial={props.inventories[1].serial}
        date={props.inventories[1].date}
      />
      <Inventory
        model={props.inventories[2].model}
        serial={props.inventories[2].serial}
        date={props.inventories[2].date}
      />
      <Inventory
        model={props.inventories[3].model}
        serial={props.inventories[3].serial}
        date={props.inventories[3].date}
      />
    </Card>
  )
}

export default InventoryTracker;