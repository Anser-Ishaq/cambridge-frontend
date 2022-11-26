import React, { useState } from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import navLogo from "./../Images/nav-logo.png";
import { motion } from "framer-motion";
import $ from 'jquery';
import "./Navbar.css";
function Navbar() {
  const [navMenu, setNavMenu] = useState();
  const [Nav, setNav] = useState(false);

  function handleNavMenu() {
    setNavMenu(!navMenu);
  }

  function handleNav() {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", handleNav);


// $("hamburger").on("click",function(){
// $("nav-menu").slideDown();
// })

  return (
    <>
    <div className="navbar">
      <div className="nav-top">
        <div className="nav-top--inner">
          <div className="nav-number">
            <ImPhone className="nav-number--logo" />
            <span>+353 1 8726600 / What's App +353 86 816 6514</span>
          </div>
          <div className="nav-email">
            <HiMail size={15} className="nav-mail--logo" />
            <span>celta@theenglishacademy.ie </span>
          </div>

          <div className="nav-social">
            <GrFacebookOption size={20} className="nav-icon--inner" />
            <TiSocialTwitter size={20} className="nav-icon--inner" />
            <IoLogoGoogleplus size={23} className="nav-icon--inner" />
            <GrInstagram size={15} className="nav-icon--inner" />
          </div>
        </div>
      </div>
      <div className={Nav ? "navbar-container active" : "navbar-container"}>
        <div className="navbar-container--inner">
          <div className="nav-logo">
            <img className="nav-logo--inner" src={navLogo} alt="" />
          </div>
          <div className="  nav-links">
            <span
              style={{ color: "#2EA3F2" }}
              className="hide nav-links--inner"
            >
              Cambridge CELTA
            </span>
            <span className="hide nav-links--inner">Course in detail</span>
            <span className="hide nav-links--inner">F.A.Q's</span>
            <span className="hide nav-links--inner">Apply Online</span>
            <span className="hide nav-links--inner">Contact us</span>

            <VscSearch className="nav-links--inner nav-search--img" size={18} />
            <GiHamburgerMenu
              onClick={handleNavMenu}
              className="hamburger nav-links--inner nav-search--img nav-ham"
              size={24}
            />
          </div>
          <div className="nav-search" style={{ display: "none" }}>
            <VscSearch />
          </div>
        </div>
      </div>
      {navMenu && (
        <div className={Nav ? "nav-menu active":"nav-menu"}>
          <motion.div
           
            transition={{ duration: 0.5 }}
            className={navMenu ? "nav-menu--inner active" : "nav-menu"}
          >
            <span>Cambridge CELTA</span>
            <span>Course in detail</span>
            <span>F.A.Q's</span>
            <span>Apply Online</span>
            <span>Contact us</span>
          </motion.div>
        </div>
      )}
      </div>
    </>
  );
}

export default Navbar;
