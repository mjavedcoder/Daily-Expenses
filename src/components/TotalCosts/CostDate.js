import "./CostDate.css";

//Here we are splitting our components:

function CostDate(props) {
  const date = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="cost">
      <div className="cost-date">{date}</div>
      <div className="cost-month">{month}</div>
      <div className="cost-year">{year}</div>
    </div>
  );
}
export default CostDate;
