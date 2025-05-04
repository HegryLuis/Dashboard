import React from "react";
import "./MetricBlock.css";

const MetricBlock = ({ data, changeBackground = false }) => {
  return (
    <div className={`metric-wrap ${changeBackground ? "otherBackground" : ""}`}>
      <div className="metric-text">
        <h3 className="metric-title">{data.title}</h3>
        <div className={`metric-content ${data.subContentDot ? "flex" : ""}`}>
          <span className="metric-main">{data.content}</span>
          {data.status && !data.subContentDot && (
            <span className="metric-status">{data.status}</span>
          )}
          {data.subContent && (
            <span className="metric-sub">{data.subContent}</span>
          )}
          {data.subContentDot && (
            <div className="metric-dots">{`${data.subContentDot} ${data.status}`}</div>
          )}
        </div>
      </div>
      {data.link && <span className="metric-link">{data.link} →</span>}
    </div>
  );
};

export default MetricBlock;
