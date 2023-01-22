import Costs from "./components/TotalCosts/Costs";
import NewCost from "./components/NewCosts/NewCost";

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

  const addAllExpense = (cost) => {
    console.log(cost);
  };
  return (
    <div>
      {/* <NewCost></NewCost> */}
      {/* We can use self-closing tag if there is nothing between tags. */}
      <NewCost passData={addAllExpense} />
      {/* Here we also did the same thing which we did in "NewCost" component and we are passing the pointer to the function "addAllExpense" and calling this in the NewCost component.In this way we have passed the data from child to parent (CostForm => NewCost => App). */}
      <Costs items={costs}></Costs>
    </div>
  );
}
export default App;
