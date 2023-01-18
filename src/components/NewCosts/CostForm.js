import React, { useState } from "react";

import "./CostForm.css";

function CostForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };
  return (
    <form>
      <div className="new-cost_design">
        <div>
          <label>Title</label>
          <input type="text" onChange={changeTitle}></input>
        </div>
        <div>
          <label>Amout</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmount}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={changeDate}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CostForm;
