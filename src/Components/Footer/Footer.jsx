import React from 'react'
import footerBackground from "./../Images/cambFooter.webp"
import { IoLogoGoogleplus } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import "./Footer.css"
function Footer() {
  return (
    <div className='footer-container'>
         <div data-aos="fade-up"
     data-aos-duration="1000" className="footer-img">
         <img className='footer-img--inner' src={footerBackground} alt="" />
         </div>
         <div className="footer-social">
         <div className="footer-social--inner">
    <GrFacebookOption className='footer-icons'    size={30} style={{color:"#666"}}    />
    <TiSocialTwitter  className='footer-icons'   size={33} style={{color:"#666"}}    />
    <IoLogoGoogleplus  className='footer-icons'   size={37} style={{color:"#666"}}    />
    <GrInstagram  className='footer-icons'   size={24} style={{color:"#666"}}   />
         </div>
         </div>
         </div>
  )
}

export default Footer;