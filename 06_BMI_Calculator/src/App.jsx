import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid  weight and height.");
    } else {
      let bmi = (weight / (height * height)) * 700;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are Underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You have Normal Weight");
      } else {
        setMessage("You are Overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <>
      <h2>BMI Calculator</h2>
      <form onSubmit={calcbmi}>
        <div>
          <label>Weight (lbs)</label>
          <input
            type="text"
            placeholder="Enter Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (in)</label>
          <input
            type="text"
            placeholder="Enter Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn-btn-outline" type="submit" onClick={reload}>
            Submit
          </button>
        </div>
        <div className="center">
          <h3>Your BMI Score is: {bmi} </h3>
          <p>{message}</p>
        </div>
      </form>
    </>
  );
}

export default App;
