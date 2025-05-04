import React from "react";
import "./WinnabilityItem.css";

const WinnabilityItem = ({ index, label, value, positive }) => {
  const progressWidth = Math.min(Math.abs(value), 100) + "%";

  return (
    <div className="winnability-item">
      <div
        className={`winnability-index ${positive ? "positive" : "negative"}`}
      >
        {index}
      </div>
      <div className="winnability-content">
        <div className="winnability-label">{label}</div>
        <div className="winnability-bar-wrapper">
          <div
            className={`winnability-bar ${positive ? "green" : "yellow"}`}
            style={{ width: progressWidth }}
          />
        </div>
      </div>
      <div className="winnability-value">
        {positive ? `+${value}%` : `-${value}%`}
      </div>
    </div>
  );
};

export default WinnabilityItem;
