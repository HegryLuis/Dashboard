import React from "react";
import "./AccountPage.css";
import database from "./../../images/database.svg";
import AttentionBlock from "../../components/attentionBlock/AttentionBlock";
import MetricBlock from "../../components/metricBlock/MetricBlock";
import DistributionBlock from "../../components/distirbutionBlock/DistributionBlock";

const accountInfo = [
  {
    top: "425 Harbor Boulevard, Suite 300",
    bottom: "Seattle, WA 98104",
  },
  {
    top: "Existing Account",
    bottom: "54383",
  },
  {
    top: "Broker",
    bottom: "Marsh McLennan",
  },
  {
    top: "Underwriter",
    bottom: "Kate Johnson",
  },
];

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

const AccountPage = () => {
  return (
    <div>
      <div className="header-account-wrap">
        <div className="header-left-block">
          <img alt="logo" src={database} className="header-logo" />

          <div className="account-header-wrap">
            <h1 className="account-header-title">Maritime Logistic Corp</h1>
            <div className="account-header-wrap-block">
              {accountInfo.map((item, index) => {
                return (
                  <div className="account-header-content" key={index}>
                    <span className="account-header-content-top">
                      {item.top.toUpperCase()}
                    </span>
                    <span className="account-header-content-bottom">
                      {item.bottom}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <AttentionBlock />
      </div>

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
    </div>
  );
};

export default AccountPage;
