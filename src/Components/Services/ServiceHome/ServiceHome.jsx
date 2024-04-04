import React from 'react'
import "./ServiceHome.css"
import serviceHomeVideo from "../../Images/services.mp4"
function ServiceHome() {
  return (
    <>
    <div className="servicehome-container">
    <div className="servicehome-container--inner">
      <div className="servicehome-video">

        <video className="servicehome-video--inner" src={serviceHomeVideo} autoPlay loop muted /> 
      </div>
      <div className="servicehome-background"></div>

      <div className="servicehome-content">
        <div data-aos="zoom-in"  data-aos-duration="2000" className="servicehome-content--inner">
        <div className="servicehome-title">
          <span>
            Services 
          </span>
        </div>  

      </div>
      <div className="servicehome-bottom--img">
      </div>
      </div>
    </div>
  </div>
 
  </>

  )
}

export default ServiceHome;