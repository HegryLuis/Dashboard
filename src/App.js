import "./App.css";
import Header from "./components/header/Header";
import MarketIntelligence from "./components/marketIntellegence/MarketIntelligence";
import PortfolioGoals from "./components/portfolioGoals/PortfolioGoals";
import QuickActions from "./components/quickActions/QuickActions";
import ScrollBar from "./components/scrollBar/ScrollBar";
import WorkQueue from "./components/workQueue/WorkQueue";

const username = "Arthur";
const tasksNum = 12;

function App() {
  return (
    <div className="App">
      <Header username={username} tasksNum={tasksNum} />
      <div className="wrap">
        <ScrollBar />
        <div className="content-wrap">
          <WorkQueue />
          <PortfolioGoals />

          <div>
            <QuickActions />
            <MarketIntelligence />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
