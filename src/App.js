import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";


  const INITIAL_COSTS = [
    {
      id: 'c1',
      date: new Date(2025, 2, 9),
      description: "MacBook",
      amount: 1254.09,
    },
    {
      id: 'c2',
      date: new Date(2026, 1, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: 'c3',
      date: new Date(2025, 11, 15),
      description: "Джинсы",
      amount: 49.99,
    },
  ];

const App = () => {
const [costs, setCosts] = useState(INITIAL_COSTS)

const addCostHandler = (cost) => {
setCosts(prevCosts => {
  return [cost, ...prevCosts]
});
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
