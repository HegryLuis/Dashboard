import React from "react";
import WinnabilityItem from "./WinnabilityItem";
import "./WinnabilityItem.css";

const decreasingFactors = [
  { label: "Premium pricing", value: 24 },
  { label: "Total exposure", value: 18 },
  { label: "Loss ratio trend", value: 13 },
  { label: "Market competition", value: 5 },
];

const DecreasingWinnabilityBlock = () => {
  return (
    <div className="winnability-block">
      <h3 className="winnability-title yellow-title">
        🡇 Decreasing Winnability
      </h3>
      {decreasingFactors.map((item, index) => (
        <WinnabilityItem
          key={index}
          index={index + 1}
          label={item.label}
          value={item.value}
          positive={false}
        />
      ))}
    </div>
  );
};

export default DecreasingWinnabilityBlock;
