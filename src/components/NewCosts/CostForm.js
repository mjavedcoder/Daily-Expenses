import React, { useState } from "react";

import "./CostForm.css";

function CostForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userAdd, setUserAdd] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const changeTitle = (event) => {
    setTitle(event.target.value);
    // setUserAdd({
    //   title: event.target.value,
    //   ...userAdd,
    // });
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
    // setUserAdd({
    //   amount: event.target.value,
    //   ...userAdd,
    // });
  };

  const changeDate = (event) => {
    setDate(event.target.value);
    // setUserAdd({
    //   date: event.target.value,
    //   ...userAdd,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      userTitle: title,
      userAmount: amount,
      userDate: new Date(date),
    };
    props.firstData(userData);

    // Here we are calling the function "userInputData" which we have declared in the "NewCost" component by passing the object(userData) as a parameter and this parameter value going to replace customData(parameter) in the "NewCost" component .

    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost_design">
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={changeTitle}></input>
        </div>
        <div>
          <label>Amout</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={changeAmount}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
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
