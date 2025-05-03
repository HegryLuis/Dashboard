import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import ScrollBar from "./components/scrollBar/ScrollBar";
import MainPage from "./pages/MainPage";
import AccountPage from "./pages/accountPage/AccountPage";

const username = "Arthur";
const tasksNum = 12;

function App() {
  return (
    <Router basename="/Dashboard">
      <div className="App">
        <Header username={username} tasksNum={tasksNum} />
        <div className="wrap">
          <ScrollBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
