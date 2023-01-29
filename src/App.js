import React, { useState } from "react";
import Costs from "./components/TotalCosts/Costs";
import NewCost from "./components/NewCosts/NewCost";

const hardCoded_Data = [
  {
    unit: "1",
    title: "Grocery",
    amount: "294",
    date: new Date(2022, 2, 2),
  },
  {
    unit: "2",
    title: " Rent",
    amount: "500",
    date: new Date(2023, 2, 14),
  },
  {
    unit: "3",
    title: " Gas",
    amount: "100",
    date: new Date(2023, 2, 15),
  },
  {
    unit: "4",
    title: " Phone-Bill",
    amount: "50",
    date: new Date(2023, 3, 20),
  },
  {
    unit: "5",
    title: " Gym",
    amount: "10",
    date: new Date(2023, 3, 17),
  },
];

function App() {
  const [costs, setCosts] = useState(hardCoded_Data);

  const addAllExpense = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
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
