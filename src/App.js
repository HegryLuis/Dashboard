import "./App.css";
import Header from "./components/header/Header";

const username = "Arthur";
const tasksNum = 12;

function App() {
  return (
    <div className="App">
      <Header username={username} tasksNum={tasksNum} />
      <div className="wrap"></div>
    </div>
  );
}

export default App;
