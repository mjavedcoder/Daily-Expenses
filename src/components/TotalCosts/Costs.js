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
        <CostItem
          date={props.items[0].date}
          label={props.items[0].item}
          amount={props.items[0].amount}
        ></CostItem>
        <CostItem
          date={props.items[1].date}
          label={props.items[1].item}
          amount={props.items[1].amount}
        ></CostItem>
        <CostItem
          date={props.items[2].date}
          label={props.items[2].item}
          amount={props.items[2].amount}
        ></CostItem>
        <CostItem
          date={props.items[3].date}
          label={props.items[3].item}
          amount={props.items[3].amount}
        ></CostItem>
        <CostItem
          date={props.items[4].date}
          label={props.items[4].item}
          amount={props.items[4].amount}
        ></CostItem>
      </Card>
    </div>
  );
}

export default Costs;
