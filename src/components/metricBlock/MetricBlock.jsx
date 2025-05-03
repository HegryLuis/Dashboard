import React from "react";
import "./MetricBlock.css";

const MetricBlock = ({ data }) => {
  return (
    <div className="metric-wrap">
      <div className="metric-text">
        <h3 className="metric-title">{data.title}</h3>
        <div className="metric-content">
          <span className="metric-main">{data.content}</span>
          {data.subContent && (
            <span className="metric-sub">{data.subContent}</span>
          )}
        </div>
      </div>
      <span className="metric-link">{data.link} →</span>
    </div>
  );
};

export default MetricBlock;
