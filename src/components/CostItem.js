import "./CostItem.css";

function CostItem() {
  return (
    <div className="cost-item">
      <div>март 2026</div>
      <div>
        <h2 className="cost-item__description">Холодильник</h2>
        <div className="cost-item__price">$999.99</div>
      </div>
    </div>
  );
}

export default CostItem;
