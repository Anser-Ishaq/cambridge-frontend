import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Cards from "./Components/Cards/Cards";
import About from "./Components/About/About";
import Round from "./Components/Round/Round";
import Steps from "./Components/Steps/Steps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cards />
      <About />
      <Round />
      <Steps />
    </div>
  );
}

export default App;
