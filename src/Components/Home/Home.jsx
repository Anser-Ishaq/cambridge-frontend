import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import ReactPlayer from "react-player/youtube";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container--inner">
        <div className="home-video">
          <ReactPlayer
            muted={true}
            loop={true}
            playing={true}
            
            width="100%"
            height={750}
            url="https://www.youtube.com/embed/yc0_xhK_DfU"
          />
        </div>
        <div className="home-background"></div>

        <div className="home-content">
          <div className="home-content--inner">
          <div className="home-title">
            <span>
              Cambridge <span className="mob">CELTA</span> <br /> <span className="desk-celta">CELTA</span> 
            </span>
          </div>
          <div className="home-tag">Available online now</div>
          <div className="home-para">
            <p>
              Learn to teach English as a foreign langugage and travel the
              World.
            </p>
            <p>
              12 week part-time course online starting 14th January 2023! Only
              €1,425
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
  );
}

export default Home;
