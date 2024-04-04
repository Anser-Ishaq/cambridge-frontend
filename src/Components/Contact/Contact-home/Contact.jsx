import React from "react";
// import wave from "./../Images/homeVideoImg.png"
import ReactPlayer from "react-player/youtube";
// import wave from "./../../Images/homeVideoImg.png";
import homeVideo from "./../../Images/phone-calls.mp4";
import { ImLocation } from "react-icons/im";
import { Link, Navigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Contact.css";
function ContactHome() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-container--inner">
          <div className="contact-video">
            {/* <ReactPlayer
            muted={true}
            loop={true}
            playing={true}
            loading="lazy"
            width="100%"
            height={750}
            url="http://www.youtube.com/embed/yc0_xhK_DfU"
            url="https://www.pexels.com/video/a-group-of-young-people-in-discussion-of-a-group-project-3209298/"
            url="./../Images/homeVideo.mp4"
          /> */}

            <video
              className="contact-video--inner"
              src={homeVideo}
              autoPlay
              loop
              muted
            />
          </div>
          <div className="contact-background"></div>

          <div className="contact-content">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="contact-content--inner"
            >
              <div className="contact-title">
                <span>Contact Us</span>
              </div>

              <div className="contact-para">
                <p style={{ margin: "0" }}>
                  We are available by phone or email daily. We can arrange
                  online Zoom or Skype consulations.
                </p>
              </div>
              <div className="contact-btn">
                <a href='#Admission'> 
                <button className="contact-btn--inner">
                  APPLY NOW
                  </button>
                  </a>
              </div>
            </div>
            <div className="contact-bottom--img"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactHome;
