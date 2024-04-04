import React from "react";
 
import About from "../About/About";
import Cards from "../Cards/Cards";
import FooterNew from "../Footer/FooterNew";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Round from "../Round/Round";
import Steps from "../Steps/Steps";

function HomeMain() {
  return (
    <div className="home-main">
      <Navbar/>
      <Home />
      <Cards />
      <About />
      <Round />
      <Steps />
      <FooterNew/>
    </div>
  );
}

export default HomeMain;
