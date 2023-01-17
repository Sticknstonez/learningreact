import Inventory from "./Inventory";
import "./InventoryList.css"

const InventoryList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="inventory-list__fallback">No expenses found.</h2>
  }
    

  return (
    <ul className="inventory-list">
        {props.items.map((inventories) => (
      <Inventory
        key={inventories.id}
        model={inventories.model}
        serial={inventories.serial}
        date={inventories.date}
      />
    ))}
    </ul>
  )
};

export default InventoryList;
