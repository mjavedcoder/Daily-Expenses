import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UserInterface/Card";
function Costs(props) {
  return (
    <Card className="costs">
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
  );
}

export default Costs;
