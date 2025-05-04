import React from "react";
import WinnabilityItem from "./WinnabilityItem";
import "./WinnabilityItem.css";

const increasingFactors = [
  { label: "Brokers relationship", value: 28 },
  { label: "Loss history", value: 22 },
  { label: "Industry growth", value: 16 },
  { label: "Multiline opportunity", value: 11 },
];

const IncreasingWinnabilityBlock = () => {
  return (
    <div className="winnability-block">
      <h3 className="winnability-title green-title">
        🡅 Increasing Winnability
      </h3>
      {increasingFactors.map((item, index) => (
        <WinnabilityItem
          key={index}
          index={index + 1}
          label={item.label}
          value={item.value}
          positive={true}
        />
      ))}
    </div>
  );
};

export default IncreasingWinnabilityBlock;
