import React from "react";
import "./Graphs.css";
import GraphsBar from "./GraphsBar";

function Graphs(props) {
  return;
  <div className="graph">
    {props.dataPoints.map((dataPoint) => (
      <GraphsBar
        key={dataPoint.id}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label}
      />
    ))}
  </div>;
}
export default Graphs;
