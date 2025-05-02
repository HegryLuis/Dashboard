import React from "react";
import "./LinearProgressBar.css";

const LinearProgressBar = ({ title, currentValue, targetValue }) => {
  const percent = Math.round((currentValue / targetValue) * 100);

  return (
    <div className="linear-bar-wrapper">
      <div className="linear-bar">
        <div className="filled" style={{ width: `${percent}%` }}>
          <span className="value">${currentValue.toFixed(1)}M</span>
          <div className="percentage">{percent}%</div>
        </div>
        <div className="target">${targetValue}M</div>
      </div>
    </div>
  );
};

export default LinearProgressBar;
