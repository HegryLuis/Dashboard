import React, { useState } from "react";
import MetricBlock from "../../../components/metricBlock/MetricBlock";
import DistributionBlock from "../../../components/distirbutionBlock/DistributionBlock";
import SidebarMenu from "../../../components/sideBarMenu/SideBarMenu";
import HistoricalTrendBlock from "../../../components/historicalTrendBlock/HistoricalTrendBlock";
import IncreasingWinnabilityBlock from "../../../components/winnability/IncreasingWinnabilityBlock";
import DecreasingWinnabilityBlock from "../../../components/winnability/DecreasingWinnabilityBlock";
import rocket from "./../../../images/rocket.svg";

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

const AccountDetailsSection = () => {
  const [selectedItem, setSelectedItem] = useState("Winnability");

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
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
            <div className="details-block-middle-wrap">
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
  );
};

export default AccountDetailsSection;
