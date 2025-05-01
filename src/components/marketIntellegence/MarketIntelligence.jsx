import React from "react";
import "./MarketIntelligence.css";

const marketData = [
  {
    color: "red",
    label: "Rate hardening in Cyber market-+15% YoY",
  },
  {
    color: "yellow",
    label: "New capacity entering Marine market",
  },
  {
    color: "blue",
    label: "Environmental regulatory changes in CA",
  },
];

const MarketIntelligence = () => {
  return (
    <div className="content-main-wrap">
      <h1 className="content-title">Market Intelligence</h1>

      <div className="market-content-wrap">
        {marketData.map((data, index) => {
          return (
            <div key={index} className="market-chip">
              <span className={`market-dot ${data.color}`}></span>
              <span className="market-label">{data.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketIntelligence;
