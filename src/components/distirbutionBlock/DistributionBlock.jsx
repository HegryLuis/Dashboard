import React from "react";
import "./DistributionBlock.css";

const DistributionBlock = ({ data }) => {
  return (
    <div className="distribution-wrap">
      <div className="linear-bar-wrapper distribution-bar-wrapper">
        <div className="linear-bar distribution-linear-bar">
          <div className="filled" style={{ width: `${data.percent}%` }}></div>
        </div>
      </div>

      <div className="distribution-text">
        {`${data.title}: ${data.percent}%`}
      </div>
    </div>
  );
};

export default DistributionBlock;
