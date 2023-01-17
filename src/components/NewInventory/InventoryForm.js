import { useState } from "react";
import "./InventoryForm.css";

const InventoryForm = (props) => {
  const [enteredModel, setEnteredModel] = useState("");
  const [enteredSerial, setEnteredSerial] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const modelChangehandler = (event) => {
    setEnteredModel(event.target.value);
  };
  const serialChangeHandler = (event) => {
    setEnteredSerial(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inventoryData = {
      model: enteredModel,
      serial: +enteredSerial,
      date: new Date(enteredDate),
    };
    props.onSaveInventoryData(inventoryData);
    setEnteredModel("");
    setEnteredSerial("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-inventory__controls">
        <div className="new-inventory__controls">
          <label>Model</label>
          <input
            type="text"
            value={enteredModel}
            onChange={modelChangehandler}
          />
        </div>
        <div className="new-inventory__controls">
          <label>Serial</label>
          <input
            type="string"
            value={enteredSerial}
            onChange={serialChangeHandler}
          />
        </div>
        <div className="new-inventory__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-inventory__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default InventoryForm;
