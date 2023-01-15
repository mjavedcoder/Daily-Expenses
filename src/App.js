import Costs from "./components/TotalCosts/Costs";

function App() {
  const costs = [
    {
      unit: "1",
      item: "Grocery",
      amount: "£294",
      date: new Date(2023, 2, 2),
    },
    {
      unit: "2",
      item: " Rent",
      amount: "£500",
      date: new Date(2023, 2, 14),
    },
    {
      unit: "3",
      item: " Gas",
      amount: "£100",
      date: new Date(2023, 2, 15),
    },
    {
      unit: "4",
      item: " Phone-Bill",
      amount: "£50",
      date: new Date(2023, 3, 20),
    },
    {
      unit: "5",
      item: " Gym",
      amount: "£10",
      date: new Date(2023, 3, 17),
    },
  ];
  return (
    <div>
      <h1>This is amazing!</h1>
      <Costs items={costs}></Costs>
    </div>
  );
}
export default App;
