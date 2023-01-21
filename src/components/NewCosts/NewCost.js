import React from "react";
import "./NewCost.css";
import CostForm from "./CostForm";

function NewCost() {
  const userInputData = (userData) => {};
  return (
    <div className="new-cost">
      <CostForm firstData={userInputData} />
    </div>
  );
}

export default NewCost;
