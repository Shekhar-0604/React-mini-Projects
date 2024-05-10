import { useState } from "react";
import "./App.css";
import LoginSignup from "./components/LoginAndSignUp/LoginSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LoginSignup />
      </div>
    </>
  );
}

export default App;
