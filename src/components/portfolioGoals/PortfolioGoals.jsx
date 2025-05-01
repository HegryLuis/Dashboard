import React from "react";
import "./PortfolioGoals.css";

const PortfolioGoals = () => {
  return (
    <div className="content-main-wrap">
      <h1 className="content-title">Portfolio Goals</h1>

      <div className="portfolio-content-block">
        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">
            PORTFOLIO LOSS RATIO TARGET
          </h6>
        </div>

        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">RENEWAL RETENTION</h6>
        </div>

        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">NEW BUSINESS TARGET</h6>
        </div>

        <div className="portfolio-content-wrap">
          <h6 className="portfolio-content-title">ANNUAL GWP TARGET</h6>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGoals;
