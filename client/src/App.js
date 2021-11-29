import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <span>
        Testing to see if this causes a conflict. I put this in before switching
        to a new branch
      </span>
      <span>Test after switching to a new branch</span>
      <div className="App">Still on Master branch</div>
      <div>Now I am on SecondBranch</div>
    </>
  );
}

export default App;
