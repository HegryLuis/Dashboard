import React from "react";
import "./PortfolioGoals.css";
import TargetStatusBar from "../targetStatusBar/TargetStatusBar";
import LinearProgressBar from "../linearProgressBar/LinearProgressBar";

const PortfolioGoals = () => {
  return (
    <div className="content-main-wrap portfolio-main-wrap">
      <h1 className="content-title">Portfolio Goals</h1>

      <div className="portfolio-content-block">
        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">
            PORTFOLIO LOSS RATIO TARGET
          </h6>
          <TargetStatusBar
            value={48.2}
            target={55}
            range={{ green: 55, yellow: 15, red: 30 }}
            delta={-6.8}
            statusLabel="GOOD"
          />
        </div>

        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">RENEWAL RETENTION</h6>
          <TargetStatusBar
            value={50}
            target={40}
            range={{ red: 55, green: 40, yellow: 5 }}
            delta={10}
            statusLabel="BAD"
          />
        </div>

        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">NEW BUSINESS TARGET</h6>
          <LinearProgressBar
            title="NEW BUSINESS TARGET"
            currentValue={8.1}
            targetValue={12}
          />
        </div>

        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">ANNUAL GWP TARGET</h6>
          <LinearProgressBar
            title="ANNUAL GWP TARGET"
            currentValue={28.4}
            targetValue={42}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGoals;
