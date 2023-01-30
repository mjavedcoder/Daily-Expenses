import React from "react";
import "./Graphs.css";
import GraphsBar from "./GraphsBar";

function Graphs(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValues = Math.max(...dataPointsValues);
  return (
    <div className="graph">
      {props.dataPoints.map((dataPoint) => (
        <GraphsBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaxValues}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Graphs;
