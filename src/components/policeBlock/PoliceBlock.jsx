import React from "react";
import "./PoliceBlock.css";

const PoliceBlock = ({ data }) => {
  return (
    <div className="police-wrap">
      <div className="police-top">
        <img alt="police-icon" src={data.icon} className="police-icon" />
        <h5 className="police-title">{data.title}</h5>
      </div>

      <div className="police-block">
        <span>{`Premium: $${data.premium}`}</span>
        <span>{`Eff.Date: ${data.effDate ? data.effDate : "---"}`}</span>
      </div>
    </div>
  );
};

export default PoliceBlock;
