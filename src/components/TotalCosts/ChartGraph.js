import React from "react";
import Graphs from "../Graphs/Graphs";

function ChartGraph(props) {
  const graphDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of props.items) {
    const expenseMonth = item.date.getMonth(); // This is starting from 0 => January => 0
    graphDataPoints[expenseMonth].value += item.amount;
  }

  //   return <Graphs dataPoints={ChartGraph} />;
  return <Graphs dataPoints={graphDataPoints} />;
}

export default ChartGraph;
