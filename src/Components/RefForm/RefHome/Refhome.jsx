import React from 'react'
import  refhomeVideo from "./../../Images/Keyboard.mp4"
import "./Refhome.css"

function Refhome() {
  return (
    <>
    <div className="refhome-container">
      <div className="refhome-container--inner">
        <div className="refhome-video">

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

          <video className="refhome-video--inner" src={refhomeVideo} autoPlay loop muted /> 
        </div>
        <div className="refhome-background"></div>

        <div className="refhome-content">
          <div data-aos="zoom-in"  data-aos-duration="2000" className="refhome-content--inner">
          <div className="refhome-title">
            <span>
              REFERAL<span className="mob">FORM</span> <br /> <span className="desk-celta">FORM</span> 
            </span>
          </div>
          <div className="refhome-tag">Available online now</div>
          
          <div className="refhome-btn">
            <button className="refhome-btn--inner">APPLY NOW</button>
          </div>
        </div>
        <div className="refhome-bottom--img">
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

export default Refhome;