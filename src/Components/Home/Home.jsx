import React from "react";
//  import wave from "./../Images/homeVideoImg.png"
import ReactPlayer from "react-player/youtube";
import homeVideo from "./../Images/homeVideo.mp4"

import "./Home.css";

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="home-container--inner">
        <div className="home-video">


          <video className="home-video--inner" src={homeVideo} autoPlay loop muted /> 
        </div>
        <div className="home-background"></div>

        <div className="home-content">
          <div data-aos="zoom-in"  data-aos-duration="2000" className="home-content--inner">
          <div className="home-title">
            <span>
              ACE MED <span className="mob">ADMISSIONS</span> <br /> <span className="desk-celta">ADMISSIONS</span> 
            </span>
          </div>
          <div className="home-tag">Available online now</div>
          <div className="home-para">
            <p style={{margin:"0"}}>
              {/* Learn to teach English as a foreign langugage and travel the
              World. */}
              We are a group of doctors & students ready 
            </p>
            <p>
              {/* 12 week part-time course online starting 14th January 2023! Only
              €1,425 */}
              to help you achieve your dream of becoming a doctor!
            </p>
          </div>
          <div className="home-btn">
            <button className="home-btn--inner">APPLY NOW</button>
          </div>
        </div>
        <div className="home-bottom--img">
        </div>
        </div>
      </div>
    </div>
    {/* <div className="home-img--bottom">
 
<img src="" alt="" />
    </div> */}
    </>
  );
}

export default Home;
