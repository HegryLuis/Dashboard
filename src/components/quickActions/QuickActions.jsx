import React from "react";
import "./QuickActions.css";

const buttons = [
  "New Submission",
  "Quote Builder",
  "Risks Models",
  "Document Upload",
];

const QuickActions = () => {
  return (
    <div className="content-main-wrap">
      <h1 className="content-title">Quick actions</h1>

      <div className="actions-content-wrap">
        {buttons.map((btn, index) => {
          return (
            <button className="actions-btn" key={index}>
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
