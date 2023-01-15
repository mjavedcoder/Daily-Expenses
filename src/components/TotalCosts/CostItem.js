import React, { useState } from "react";
import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UserInterface/Card";

function CostItem(props) {
  const [label, setLabel] = useState(props.label);

  function clickPlease() {
    setLabel("New");
  }
  return (
    <Card className="cost-item">
      <CostDate date={props.date}></CostDate>
      <div className="cost-item_details">
        <h2>{label}</h2>
        <div className="cost-item_price">{props.amount}</div>
      </div>
      <button onClick={clickPlease}>Click me !</button>
    </Card>
  );
}

export default CostItem;

//First we have hard-codded the values which we were rendering in our browsers,then we have stored those values inside the component in the varibale  and we were calling those varibales inside of the componrnt .

//How did we make our componets re-useable with different values ? Becoz hard coded or the data stored in variable were rendering the same value so we took one of the costs array [] in "App" component and stored all those values which we wanted to render and those valeus been stored in objects .

//We can store as many values ae we wnat in that array of "costs" .
//How did we pass the "App" component data to the "CostItem" component.First we have given the attributes to the custom components.Like in the first component we have given these attribute "label={costs[0].item}
// amount={costs[0].amount}
// date={costs[0].date}"
//These attributes can be call with any name or we can assign any name to the attribute.As in our case the attributes are "label","amount","date".

//Once all this done now we have to do something with these received attributes values and for this we'll use parameters and it will be with the name of "props" .Although you can name whatever you want i.e "data" but typically we use "props".As we use parameters in javascript to passing values into functions,in the same we use parameters in react too .
