import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2025, 2, 9),
      description: "MacBook",
      amount: 1254.09,
    },
    {
      date: new Date(2026, 1, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2025, 11, 15),
      description: "Джинсы",
      amount: 49.99,
    },
  ];

  return (
    <div>
      <h1>начнем изучение react</h1>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
