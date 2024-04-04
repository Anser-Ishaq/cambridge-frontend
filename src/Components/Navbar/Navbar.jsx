import React, { useState, useEffect } from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandWhatsapp } from "react-icons/tb";
// import navLogo from "./../Images/nav-logo.png";
import navLogo from "./../Images/mainLogo.png/";
import { motion } from "framer-motion";
import $ from "jquery";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [navMenu, setNavMenu] = useState();
  const [Nav, setNav] = useState(false);
  const logAuth = localStorage.getItem("log-in");
  const signAuth = localStorage.getItem("sign-up");

  let navigate = useNavigate();
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

  function handleLogo() {
    navigate("/");
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/signup");

    let timerInterval;
    Swal.fire({
      title: "Logging Out",
      html: "Routing to Signup in<b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="navbar-main">
        <div className="nav-top">
          <div className="nav-top--inner">
            <div className="nav-number">
              <TbBrandWhatsapp size={16} className="nav-number--logo" />
              <span> +40 753 333 472</span>
            </div>
            <div className="nav-email">
              <HiMail size={15} className="nav-mail--logo" />
              <span>support@acemed.com</span>
            </div>

            <div className="nav-social">
              <a
                href="https://www.facebook.com/AceMedAdmission/"
                className="nav-icon--inner"
              >
                <GrFacebookOption size={20} className="nav-icon--inner" />
              </a>
              <a
                href="https://www.instagram.com/AceMedAdmission"
                className="nav-icon--inner"
              >
                <GrInstagram size={15} className="nav-icon--inner" />
              </a>
            </div>
            <div className="nav-login">
              <Link
                style={{ opacity: "0.8" }}
                className="nav-link"
                to={"/signup"}
              >
                <span>Online Portal</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={Nav ? "navbar-container active" : "navbar-container"}>
          <div className="navbar-container--inner">
            <div className="nav-logo">
              <img
                onClick={handleLogo}
                className="nav-logo--inner"
                src={navLogo}
                alt=""
              />
            </div>
            <div className="nav-links">
              <span
                style={{ color: "#2EA3F2" }}
                className="hide nav-links--inner"
              >
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </span>

              <span className="hide nav-links--inner">
                <Link className="nav-link" to={"/universities"}>
                  Universities
                </Link>
              </span>
              <span className="hide nav-links--inner">
                <Link className="nav-link" to={"/about"}>
                  Romaina
                </Link>
              </span>
              <span className="hide nav-links--inner">
                <Link className="nav-link" to={"/services"}>
                  Services
                </Link>
              </span>
              <span className="hide nav-links--inner">
                <Link className="nav-link" to={"/faq"}>
                  F.A.Q's
                </Link>
              </span>

              <Link to={"/contact"} className=" nav-link">
                <span className="hide nav-links--inner">Contact us</span>
              </Link>

              {signAuth || logAuth ? (
                <Link to={"/signup"} className=" nav-link">
                  <span
                    onClick={handleLogout}
                    className="hide nav-links--inner"
                  >
                    Logout
                  </span>
                </Link>
              ) : (
                ""
              )}
              <VscSearch
                className="nav-links--inner nav-search--img"
                size={18}
              />
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
          <div className={Nav ? "nav-menu active" : "nav-menu"}>
            <motion.div
              transition={{ duration: 0.5 }}
              className={navMenu ? "nav-menu--inner active" : "nav-menu"}
            >
              <span>
                <Link className="nav-menu--link" to={"/"}>
                  Home{" "}
                </Link>
              </span>

              <span>
                <Link to={"/universities"} className="nav-menu--link">
                  Universities
                </Link>
              </span>
              <span>
                <Link className="nav-menu--link" to={"/about"}>
                  Romania
                </Link>
              </span>
              <span>
                <Link className="nav-menu--link" to={"/services"}>
                  Services
                </Link>
              </span>
              <span>
                <Link className="nav-menu--link" to={"/faq"}>
                  F.A.Q's
                </Link>
              </span>

              <span>
                <Link className="nav-menu--link" to={"/contact"}>
                  {" "}
                  Contact us{" "}
                </Link>
              </span>
              <span className="nav-menu--login">
                <Link
                  className=" nav-menu--login nav-menu--link"
                  to={"/signup"}
                >
                  Online Portal
                </Link>
              </span>

              {signAuth || logAuth ? (
                <span className="nav-menu--login">
                  <Link
                    onClick={handleLogout}
                    className=" nav-menu--login nav-menu--link"
                    to={"/signup"}
                  >
                    Logout
                  </Link>
                </span>
              ) : (
                <span className="nav-menu--login">
                  <Link
                    className=" nav-menu--login nav-menu--link"
                    to={"/signup"}
                  >
                    Signup
                  </Link>
                </span>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
