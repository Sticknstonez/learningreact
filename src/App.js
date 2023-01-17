import { useState } from "react";
import InventoryTracker from "./components/Inventory/InventoryTracker";
import NewInventory from "./components/NewInventory/NewInventory";
import "./index.css";

const temp_inventories = [
  {
    id: "e1",
    model: "HP Probook G8",
    serial: "5CDG48FX4",
    date: new Date(2022, 6, 2),
  },
  {
    id: "e2",
    model: "HP 255 G7",
    serial: "5CD57H435",
    date: new Date(2022, 1, 23),
  },
  {
    id: "e3",
    model: "HP Chromebook 11",
    serial: "5CDJ734FG",
    date: new Date(2022, 5, 11),
  },
  {
    id: "e4",
    model: "HP Probook x360",
    serial: "5CDG48B6F",
    date: new Date(2022, 9, 18),
  },
];

const App = () => {
  const [inventories, setInventories] = useState(temp_inventories);

  const addInventoryHandler = (inventory) => {
    setInventories((prevInventories) => {
      return [inventory, ...prevInventories];
    });
  };

  return (
    <div>
      <h1>Inventory</h1>
      <NewInventory onAddInventory={addInventoryHandler}></NewInventory>
      <InventoryTracker inventories={inventories}></InventoryTracker>
    </div>
  );
};

export default App;
