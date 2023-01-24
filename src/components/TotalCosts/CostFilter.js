import React from "react";

import "./CostFilter.css";
function CostFilter(props) {
  const dropDownValue = (event) => {
    // console.log(event.target.value);
    props.onChangeTransferData(event.target.value);
  };
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Select-year</label>
        <select value={props.selected} onChange={dropDownValue}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default CostFilter;
