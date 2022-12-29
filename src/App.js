import InventoryTracker from "./components/InventoryTracker";

function App() {
  const inventories = [
    {
      id: "e1",
      model: "HP Probook G8",
      serial: "5CDG48FX4",
      date: new Date(2022, 12, 22),
    },
    {
      id: "e2",
      model: "HP 255 G7",
      serial: "5CD57H435",
      date: new Date(2022, 12, 22),
    },
    {
      id: "e3",
      model: "HP Chromebook 11",
      serial: "5CDJ734FG",
      date: new Date(2022, 12, 22),
    },
    {
      id: "e4",
      model: "HP Probook x360",
      serial: "5CDG48B6F",
      date: new Date(2022, 12, 22),
    },
  ];

  return (
    <div>
      <h1>Inventory Tracker</h1>
      <InventoryTracker inventories={inventories}></InventoryTracker>
    </div>
  );
}

export default App;
