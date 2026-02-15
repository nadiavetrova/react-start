import "./CostItem.css";
import CostDate from "./CostDate";

function CostItem(props) {
  return (
    <div className="cost-item">
      <CostDate date={props.date} />
      <div>
        <h2 className="cost-item__description">{props.description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default CostItem;
