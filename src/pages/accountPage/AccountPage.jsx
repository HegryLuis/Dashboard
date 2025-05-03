import React from "react";
import "./AccountPage.css";
import database from "./../../images/database.svg";
import AttentionBlock from "../../components/attentionBlock/AttentionBlock";
import MetricBlock from "../../components/metricBlock/MetricBlock";
import DistributionBlock from "../../components/distirbutionBlock/DistributionBlock";
import boat from "../../images/boat.svg";
import factory from "../../images/factory.svg";
import person from "../../images/person.svg";
import umbrella from "../../images/umbrella.svg";
import verified from "../../images/verified.svg";
import PoliceBlock from "../../components/policeBlock/PoliceBlock";
import check_circle from "../../images/check_circle.svg";
import ComplianceDocumentation from "../../components/сomplianceDocumentation/ComplianceDocumentation";

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

const policiesData = [
  {
    icon: boat,
    title: "Marine Cargo",
    premium: "625,500",
    effDate: "6/30/2026",
  },
  {
    icon: verified,
    title: "General Liability",
    premium: "175,000",
    effDate: "6/30/2026",
  },
  {
    icon: person,
    title: "Workers Comp",
    premium: "75,000",
  },
  {
    icon: factory,
    title: "Property",
    premium: "64,829.83",
  },
  {
    icon: umbrella,
    title: "Umbrella",
    premium: "275,000",
    effDate: "13/03/2026",
  },
];

const documentationData = [
  "KYC verification",
  "Required Documentation",
  "Regulatory approval",
  "Financial Verification",
];

const accountStatusData = [
  "Submitted",
  "Review",
  "Quote",
  "Bind",
  "Issue",
  "Renew",
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

      <div className="policies-wrap">
        <h1>Policies</h1>
        <div className="policies-content">
          {policiesData.map((data, index) => {
            return <PoliceBlock key={index} data={data} />;
          })}
        </div>
      </div>

      <div className="status-documentation-wrap">
        <div className="status-block">
          <h3 className="status-documentation-title ">Account Status</h3>
          <div className="status-documentation-content status-content"></div>
        </div>

        <ComplianceDocumentation />
      </div>
    </div>
  );
};

export default AccountPage;
