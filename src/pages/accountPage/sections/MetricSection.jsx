import React from "react";
import MetricBlock from "../../../components/metricBlock/MetricBlock";
import DistributionBlock from "../../../components/distirbutionBlock/DistributionBlock";

const metricsData = [
  {
    title: "Winnability",
    content: "Very Strong",
    subContent: "••••",
    link: "See all factors",
  },
  {
    title: "Loss Ratio",
    content: "25%",
    subContent: "vs 42% target",
    link: "View history",
  },
  {
    title: "Premium Growth",
    content: "12.4%",
    subContent: "YoY increase // $123M vs $150M Target",
    link: "View trend",
  },
];

const distributionData = [
  {
    title: "Marine Cargo",
    percent: 71.4,
  },
  {
    title: "General Liability",
    percent: 20,
  },
  {
    title: "Workers Comp",
    percent: 8.6,
  },
];

const MetricSection = () => {
  return (
    <div className="metrics-wrap">
      <div className="metric-sections">
        {metricsData.map((data, index) => {
          return <MetricBlock key={index} data={data} />;
        })}
      </div>

      <div className="distribution-section">
        <h5 className="distribution-title">Exposure Distribution</h5>
        <div className="distribution-content-wrap">
          {distributionData.map((data, index) => {
            return <DistributionBlock key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MetricSection;
