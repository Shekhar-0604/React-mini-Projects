import { useState } from "react";
import Accordian from "./components/accordian/Accordian";
import "./App.css";
import Randomcolor from "./components/random-color/Randomcolor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Accordian /> */}

      <Randomcolor />
    </>
  );
}

export default App;
