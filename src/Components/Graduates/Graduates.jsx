import React from "react";
import Gradarr from "./Gradarr";
import "./Graduates.css";

function Graduates() {
  return (
    <div className="grad-container">
      <div className="grad-content">
        <div className="grad-title">OUR GRADUATES</div>
        <div className="grad-para">
          Just what some of our recent graduates had to say
        </div>
      </div>
      <div className="grad-container--main">
        {Gradarr.map((grad, index) => (
          <div data-aos="zoom-in" data-aos-duration="2000" className="grad-container--inner">
            <div className="grad-img">
              <img className="grad-img--inner" src={grad.gradImg} alt="" />
            </div>
            <div className="grad-inner--content">
            <span className="grad-inner--title">{grad.gradTitle}</span>
            <p className={index==0 ? "grad-inner--tag1": index==1? "grad-inner--tag2" : index==2? "grad-inner--tag3":""}>{grad.gradTag}</p>
          
            <span className="grad-inner--para1">{grad.gradPara1}</span>
            <p className="grad-inner--para2">{grad.gradPara2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Graduates;
