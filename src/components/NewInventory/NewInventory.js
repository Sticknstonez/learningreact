import { useState } from "react";
import InventoryForm from "./InventoryForm";
import "./InventoryStyle.css";

const NewInventory = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveInventoryDataHandler = (enteredInventoryData) => {
    const inventoryData = {
      ...enteredInventoryData,
      id: Math.random().toString(),
    };
    props.onAddInventory(inventoryData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-inven">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Item</button>
      )}
      {isEditing && (
        <InventoryForm
          onSaveInventoryData={saveInventoryDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewInventory;
