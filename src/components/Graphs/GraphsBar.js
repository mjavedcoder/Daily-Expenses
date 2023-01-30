import React from "react";
import "./GraphsBar.css";

function GraphsBar(props) {
  let barFILLED = "0%";

  if (props.maxValue > 0) {
    barFILLED = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  //   return (
  //     <div>
  //       <div className="graph-bar">
  //         <div className="graph-bar__inner"></div>
  //         <div className="graph-bar__fill" style={{ height: barFILLED }}></div>
  //       </div>
  //       <div className="graph-bar__label">{props.label}</div>
  //     </div>
  //   );
  return (
    <div className="graph-bar">
      <div className="graph-bar__inner">
        <div className="graph-bar__fill" style={{ height: barFILLED }}></div>
      </div>
      <div className="graph-bar__label">{props.label}</div>
    </div>
  );
}

export default GraphsBar;
