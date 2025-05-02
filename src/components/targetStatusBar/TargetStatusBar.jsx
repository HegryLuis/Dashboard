import React from "react";
import "./TargetStatusBar.css";

const TargetStatusBar = ({ value, target, range, delta, statusLabel }) => {
  const percent = parseFloat(value);
  const isGood = delta < 0;

  const targetPercent = Array.isArray(target)
    ? (target[0] + target[1]) / 2
    : target;

  return (
    <div className="tsb-wrapper">
      <div className="tsb-target-pointer" style={{ left: `${targetPercent}%` }}>
        <div className="tsb-arrow target">▼</div>
        <div className="tsb-target">
          TG:
          {Array.isArray(target) ? `${target[0]}-${target[1]}%` : `${target}%`}
        </div>
      </div>

      <div className="tsb-bar">
        <div
          className="tsb-segment green"
          style={{ width: `${range.green}%` }}
        />
        <div
          className="tsb-segment yellow"
          style={{ width: `${range.yellow}%` }}
        />
        <div className="tsb-segment red" style={{ width: `${range.red}%` }} />

        <div className="tsb-pointer" style={{ left: `${percent}%` }}>
          <div className={`tsb-arrow ${isGood ? "good" : "bad"}`}>▲</div>
        </div>

        <div className="tsb-value" style={{ left: `${percent}%` }}>
          {value}%
        </div>
      </div>

      <div className="tsb-delta" style={{ left: `${percent - 20}%` }}>
        <span className={isGood ? "good" : "bad"}>
          {delta > 0 ? "+" : ""}
          {delta}% ({statusLabel})
        </span>
      </div>
    </div>
  );
};

export default TargetStatusBar;
