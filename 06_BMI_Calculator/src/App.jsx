import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>BMI Calculator</h2>
      <form action="">
        <div>
          <label>Weight (lbs)</label>
          <input type="text" placeholder="Enter Weight" />
        </div>
        <div>
          <label>Height (in)</label>
          <input type="text" placeholder="Enter Height" />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn-btn-outline" type="submit">
            Submit
          </button>
        </div>
        <div className="center">
          <h3>Your BMI Score is: </h3>
          <p></p>
        </div>
      </form>
    </>
  );
}

export default App;
