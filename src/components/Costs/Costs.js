import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React,  {useState} from "react";

const Costs = (props) => {

const [selectedYear, setSelectedYear] = useState("2026");

const yearChangeHandler = (year) => {
setSelectedYear(year);
}


const filteredCosts = props.costs.filter(cost => {
  return cost.date.getFullYear().toString() === selectedYear;
})


  return (
<div>
    <Card className="costs">
      {/* //констролируемый компонент CostsFilter для Costs.js
      // двустороннее связывание*/}
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {filteredCosts.map(cost => <CostItem 
      key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}/>
      )}
    </Card>
    </div>
  );
};

export default Costs;
