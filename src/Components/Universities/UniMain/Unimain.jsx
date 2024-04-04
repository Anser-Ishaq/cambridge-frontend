import React from "react";
import FooterNew from "../../Footer/FooterNew";
import Navbar from "../../Navbar/Navbar";
import Unihome from "../Unihome/Uni";
import UniName from "../UniNames/UniName";
function Unimain() {
  return (
    <div style={{overflow:"hidden"}} className="uni-main">
      <Navbar />
      <Unihome />
      <UniName/>
      <FooterNew />
    </div>
  );
}

export default Unimain;
