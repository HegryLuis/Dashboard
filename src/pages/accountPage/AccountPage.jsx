import React, { useState } from "react";
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
import ComplianceDocumentation from "../../components/сomplianceDocumentation/ComplianceDocumentation";
import AccountStatusBlock from "../../components/accountStatusBlock/AccountStatusBlock";
import SidebarMenu from "../../components/sideBarMenu/SideBarMenu";
import HistoricalTrendBlock from "../../components/historicalTrendBlock/HistoricalTrendBlock";
import IncreasingWinnabilityBlock from "../../components/winnability/IncreasingWinnabilityBlock";
import DecreasingWinnabilityBlock from "../../components/winnability/DecreasingWinnabilityBlock";
import rocket from "./../../images/rocket.svg";
import CommunicationBlock from "../../components/communicationBlock/CommunicationBlock";
import PoliciesTable from "../../components/policiesTable/PoliciesTable";

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

const detailsPositionData = [
  {
    title: "Your score",
    percent: 82,
  },
  {
    title: "Market Avg",
    percent: 68,
  },
  {
    title: "Top competitor",
    percent: 88,
  },
];

const detailsMetricData = {
  title: "Overall Score",
  content: "82%",
  status: "Very Strong",
  subContentDot: "••••",
};

const dataAI = [
  {
    title: "Offer 5% premium discount in exchange for 3-year commitment",
    text: "Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.",
  },
  {
    title: "Propose risk control services for cargo handling procedures",
    text: "Can potentially reduce loss ratio 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios",
  },
];

const AccountPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState("Winnability");

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        <AccountStatusBlock />
        <ComplianceDocumentation />
      </div>

      <div className="account-details-wrap">
        <h1>Account Details</h1>

        <div className="details-main-wrap">
          <div className="details-sidebar-wrap">
            <SidebarMenu onItemSelect={handleItemSelect} />
          </div>

          <div className="details-main-block-wrap">
            <h1 className="details-main-title">{selectedItem}</h1>

            <div className="details-block-top">
              <div className="details-position-block">
                <MetricBlock data={detailsMetricData} changeBackground={true} />
              </div>
              <div className="details-position-block">
                <HistoricalTrendBlock />
              </div>
              <div className="details-position-block distribution-content-wrap">
                {detailsPositionData.map((data, index) => {
                  return <DistributionBlock key={index} data={data} />;
                })}
              </div>
            </div>

            <div className="details-block-middle">
              <div style={{ display: "flex", gap: "20px" }}>
                <IncreasingWinnabilityBlock />
                <DecreasingWinnabilityBlock />
              </div>
            </div>

            <div className="details-block-bottom">
              <div className="details-bottom-title">
                <img alt="rocket" src={rocket} />
                <span>AI-Powered Recommendation</span>
              </div>

              <div className="details-bottom-text-box">
                {dataAI.map((data, index) => {
                  return (
                    <div key={index} className="bottom-box">
                      <div className="bottom-box-text">
                        <h4>{data.title}</h4>
                        <span>{data.text}</span>
                      </div>
                      <button className="details-btn">Apply</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="communication-wrap">
        <h2>Communication</h2>

        <div className="communication-block">
          <div className="search-block-top">
            <input
              type="text"
              placeholder="Search..."
              className="input-search header-search"
            />

            <div className="search-btns-wrap">
              <button className="search-btn">Filter</button>
              <button className="search-btn">Group</button>
            </div>
          </div>

          <CommunicationBlock />
        </div>
      </div>

      <div className="policies-table-wrap">
        <h2>Policies</h2>

        <div className="policies-table-block">
          <div className="search-block-top">
            <input
              type="text"
              placeholder="Search..."
              className="input-search header-search"
            />

            <div className="search-btns-wrap">
              <button className="search-btn">Filter</button>
              <button className="search-btn">Group</button>
            </div>
          </div>

          <PoliciesTable />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
