import React from "react";
import "./CostList.css";
import CostItem from "./CostItem";

function CostList(props) {
  if (props.items.length === 0) {
    return <h2 className="cost-list-fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="cost-List">
      {props.items.map((item) => (
        <CostItem
          key={item.unit}
          date={item.date}
          label={item.title}
          amount={item.amount}
        />
      ))}
    </ul>
  );
}
export default CostList;
