import React from 'react'
import RhomeVideo from "./../../Images/about.mp4"

import "./Rhome.css"
function Rhome() {
  return (
    <>
    <div className="Rhome-container">
      <div className="Rhome-container--inner">
        <div className="Rhome-video">

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

          <video  className="Rhome-video--inner" src={RhomeVideo} autoPlay loop muted /> 
        </div>
        <div className="Rhome-background"></div>

        <div className="Rhome-content">
          <div data-aos="zoom-in"  data-aos-duration="2000" className="Rhome-content--inner">
          <div className="Rhome-title">
            <span>
            ROMAINA 
            {/* <span className="mob">ROMAINA</span> <br /> <span className="desk-celta">ROMAINA</span>  */}
            </span>
          </div>
          {/* <div className="Rhome-tag">Available online now</div> */}
          {/* <div className="Rhome-para">
            <p style={{margin:"0"}}>
             
              We are a group of doctors & students ready 
            </p>
            <p>
              
              to help you achieve your dream of becoming a doctor!
            </p>
          </div> */}
          {/* <div className="Rhome-btn">
            <button className="Rhome-btn--inner">APPLY NOW</button>
          </div> */}
        </div>
        <div className="Rhome-bottom--img">
        </div>
        </div>
      </div>
    </div>
    {/* <div className="home-img--bottom">
 
<img src="" alt="" />
    </div> */}
    </>
  )
}

export default Rhome;