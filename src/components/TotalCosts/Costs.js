import React, { useState } from "react";

import "./Costs.css";
import Card from "../UserInterface/Card";
import CostFilter from "./CostFilter";
import CostList from "./CostList";
import ChartGraph from "./ChartGraph";

function Costs(props) {
  const [firstValue, setFirstValue] = useState("2023");
  const transferData = (selectYear) => {
    // console.log(selectYear);
    setFirstValue(selectYear);
  };

  const filteredValues = props.items.filter((cost) => {
    return cost.date.getFullYear().toString() === firstValue;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter selected={firstValue} onChangeTransferData={transferData} />
        <ChartGraph items={filteredValues} />
        <CostList items={filteredValues} />
      </Card>
    </div>
  );
}

export default Costs;
