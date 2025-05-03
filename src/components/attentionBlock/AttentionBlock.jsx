import React from "react";
import "./AttentionBlock.css";
import priority from "./../../images/priority.svg";

const attentionData = [
  {
    title: "Marine Survey Required",
    subtext: "Scheduled for 06/12/2025",
    link: "Review details link",
  },
  {
    title: "Loss Control Complete",
    subtext: "Last inspection: 02/15/2025",
    link: "View report",
  },
  {
    title: "Claims Review Required",
    subtext: "3 open claims // $245,000 TTL",
    link: "View claims",
  },
];

const AttentionBlock = () => {
  return (
    <div className="header-right-block">
      <div className="right-top-block">
        <span>
          <img alt="attention" src={priority} />
        </span>
        <h4>Needs Attention</h4>
      </div>

      <div className="right-bottom-block">
        {attentionData.map((data, index) => {
          return (
            <div className="attention-item">
              <div className="attention-title">{data.title}</div>
              <div className="attention-subtext">{data.subtext}</div>
              <a className="attention-link" href="#">
                {`${data.link} →`}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttentionBlock;
