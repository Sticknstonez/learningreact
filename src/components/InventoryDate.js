import './InventoryDate.css'

function InventoryDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="inventory-date">
      <div className="inventory-date__month">{month}</div>
      <div className="inventory-date__day">{day}</div>
      <div className="inventory-date__year">{year}</div>
    </div>
  );
}

export default InventoryDate;
