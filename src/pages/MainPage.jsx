import React from "react";
import WorkQueue from "../components/workQueue/WorkQueue";
import PortfolioGoals from "../components/portfolioGoals/PortfolioGoals";
import QuickActions from "../components/quickActions/QuickActions";
import MarketIntelligence from "../components/marketIntellegence/MarketIntelligence";
import MyAccounts from "../components/myAccounts/MyAccounts";

const MainPage = () => {
  return (
    <>
      <div className="content-wrap">
        <WorkQueue />
        <PortfolioGoals />

        <div>
          <QuickActions />
          <MarketIntelligence />
        </div>
      </div>

      <MyAccounts />
    </>
  );
};

export default MainPage;
