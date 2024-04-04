import React from "react";
import "./Faq.css";
import video from "./../../Images/questions.mp4";
import Accordion from "react-bootstrap/Accordion";
function Faqhome() {
  return (
    <>
      <div className="faq-container">
        <div className="faq-container--inner">
          <div className="faq-video">
            <video
               
              className="faq-video--inner"
              src={video}
              autoPlay
              loop
              muted
            />
          </div>
          <div className="faq-background"></div>

          <div className="faq-content">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="faq-content--inner"
            >
              <div className="faq-title">
                <span>
                  More questions?  <span className="mob">Contact us</span>
                  <br /> <span className="desk-celta">Contact us</span>
                </span>
              </div>

              <div className="faq-btn">
                <a href='#Accordian'>
                <button className="faq-btn--inner">QUESTIONS</button>
                </a>
              </div>
            </div>
            <div className="faq-bottom--img"></div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Faqhome;
