import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React,  {useState} from "react";

const Costs = (props) => {

const [selectedYear, setSelectedYear] = useState("2023");

const yearChangeHandler = (year) => {
setSelectedYear(year);
}

  return (
<div>
    <Card className="costs">
      {/* //констролируемый компонент CostsFilter для Costs.js
      // двустороннее связывание*/}
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {props.costs.map(cost => <CostItem 
        date={cost.date}
        description={cost.description}
        amount={cost.amount}/>
      )}
    </Card>
    </div>
  );
};

export default Costs;
