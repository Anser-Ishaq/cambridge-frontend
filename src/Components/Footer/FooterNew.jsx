import React,{useEffect} from "react";
import facebook from "./../Images/fb.svg";
import phone from "./../Images/phone.svg";
import email from "./../Images/message.svg";
import telegram from "./../Images/telegram.svg";
import footerlogo from "./../Images/footerlogo2.svg";
import { TbBrandWhatsapp } from 'react-icons/tb';
import { GrInstagram } from "react-icons/gr";
// import logo from "./../Images/nav-logo.png"
import logo from "./../Images/mainLogo.png";
import { Link,useNavigate } from "react-router-dom";

import "./FooterNew.css";
function FooterNew() {
  let navigate = useNavigate();

  function handleLogo(){
    navigate("/")
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="footer-container">
      <div className="footer-container--inner">
        <div className="footer-content">
          <div className="footer-logo-side">
            <div className="footer-logo">
              <img onClick={handleLogo} className="  footer-logo--inner" src={logo} alt="" />
            </div>
            {/* <div style={{visibility:"hidden"}} className=" footer-felx footer-adress">
              <div className="footer-adress--img">
                <img className="images--common" src={telegram} alt="" />
              </div>
              <span>1000 N West Street, Suite 1200 Wilmington, DE 19801</span>
            </div> */}
            <div className=" footer-felx footer-mail">
              <div className="footer-mail--img">
                <img className="images--common" src={email} alt="" />
              </div>
              <span>support@acemed.com</span>
            </div>
            <div className=" footer-felx footer-number">
              <div className="footer-number--img">
                {/* <img className="images--common" src={phone} alt="" /> */}
                <TbBrandWhatsapp size={25}/>
              </div>
              <span>+40 753 333 472</span>
            </div>
          </div>

          <div className="footer-social--side">
            <div className="footer-links">
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/"}>
                    Home
                  </Link>
                </span>
                <div className="hover-line1"></div>
              </div>
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/universities"}>
                    Universities
                  </Link>
                </span>
                <div className="hover-line1"></div>
              </div>
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/about"}>
                    Romania
                  </Link>
                </span>
                <div className="hover-line1"></div>
              </div>
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/services"}>
                    Services
                  </Link>
                </span>
                <div className="hover-line2"></div>
              </div>
            
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/faq"}>
                    F.A.Q's
                  </Link>
                </span>
                <div className="hover-line4"></div>
              </div>
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/contact"}>
                  Contact us
                  </Link>
                </span>
                <div className="hover-line5"></div>
              </div>
              <div className="footer-links--inner">
                <span>
                  <Link className="footer-link" to={"/referal-form"}>
                    Referal Form
                  </Link>
                </span>
                <div className="hover-line3"></div>
              </div>
            </div>
            <div className=" footer-felx footer-fb">
              <a href='https://www.facebook.com/AceMedAdmission/'>
              <span>Connect with us on facebook</span>
              <img className="images--common" src={facebook} alt="" />
              </a>
            </div>
            <div className=" footer-felx footer-fb">
<a href='https://www.instagram.com/AceMedAdmission'>
              <span>Connect with us on Instagram</span>
              <GrInstagram className="images--common footer-insta"/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy--rights">
          <div className="footer-rights">
            © 2022 ACE MED, All Rights Reserved
          </div>
          <div className="footer-terms">
{/* <Link className="footer-link" to={"/referal-form"} > */}
            Privacy Policy | Terms & Conditions
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
