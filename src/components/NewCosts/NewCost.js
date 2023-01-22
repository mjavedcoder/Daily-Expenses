import React from "react";
import "./NewCost.css";
import CostForm from "./CostForm";

function NewCost(props) {
  const userInputData = (customData) => {
    const userData = {
      ...customData,
    };
    // console.log(userData);
    props.passData(userData);
  };
  return (
    <div className="new-cost">
      <CostForm firstData={userInputData} />

      {/* Above we are pointing towards the function (userInputData) and we are declaring this in the same component(NewCost).Although we gonna call this function in the other child component (CostForm).The reason for that is we want to transfer some of the data which is in "CostForm" to the parent components,first to the "Newcost" component and then to the "App".So this "firstData" as an attribute receives function(userInputData) */}
    </div>
  );
}

export default NewCost;
