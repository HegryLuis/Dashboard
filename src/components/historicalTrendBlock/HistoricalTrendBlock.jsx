import React from "react";
import "./HistoricalTrendBlock.css";

const HistoricalTrendBlock = () => {
  return (
    <div className="historical-trend-wrap">
      <h3 className="historical-title">Historical trend</h3>
      <svg
        className="historical-chart"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          points="0,50 40,35 80,30 120,30 160,32 200,28"
        />
      </svg>
      <div className="historical-labels">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>Now</span>
      </div>
    </div>
  );
};

export default HistoricalTrendBlock;
