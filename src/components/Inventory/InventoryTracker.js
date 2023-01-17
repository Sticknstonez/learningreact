import { useState } from "react";
import Card from "../UI/Card";
import InventoryFilter from "./InventoryFilter";
import InventoryList from "./InventoryList";
import "./InventoryTracker.css";
import InventoryChart from "./InventoryChart";

const InventoryTracker = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredInventories = props.inventories.filter((inventories) => {
    return inventories.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="tracker">
        <InventoryFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <InventoryChart inventories={filteredInventories} />
        <InventoryList items={filteredInventories} />
      </Card>
    </div>
  );
};

export default InventoryTracker;
