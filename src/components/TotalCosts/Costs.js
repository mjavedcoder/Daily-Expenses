import React, { useState } from "react";
import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UserInterface/Card";
import CostFilter from "./CostFilter";
function Costs(props) {
  const [firstValue, setFirstValue] = useState("2023");
  const transferData = (selectYear) => {
    // console.log(selectYear);
    setFirstValue(selectYear);
  };
  return (
    <div>
      <Card className="costs">
        <CostFilter selected={firstValue} onChangeTransferData={transferData} />
        {/* By using an arrow function: */}
        {props.items.map((item) => (
          <CostItem date={item.date} label={item.title} amount={item.amount} />
        ))}
        {/* By using simple function syntex: */}
        {/* {props.items.map(function (item) {
          return (
            <CostItem date={item.date} label={item.item} amount={item.amount} />
          );
        })} */}
      </Card>
    </div>
  );
}

export default Costs;
