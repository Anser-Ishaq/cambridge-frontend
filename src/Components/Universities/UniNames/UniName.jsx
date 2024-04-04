import React from "react";
import "./UniName.css";
import "./UniNameArr";
import UniNameArray from "./UniNameArr";
import curves from "../../Images/stepsImg.png";
function UniName() {
  return (
    <>
      {/* <div className="uni-curves--img">
        <img className="uni-curves--img_inner" src={curves} alt="" />
      </div> */}
      <div className="uniname-container">
        <div className="uniname-container--inner">
          {UniNameArray.map((name, index) => (
            <div className="uni-Names">
              <div className="uniName-img--side">
                {index%2==1?
                  <div className="uni-curves--img">
                    <img
                      className="uni-curves--img_inner"
                      src={curves}
                      alt=""
                    />
                  </div>
:""}
                <div
                  data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="1500"
                  className="uniname-img"
                >
                  
                  <img className="uni-img--inner" src={name.uniImg} alt="" />
                </div>
                <div className="uniName-content">
                  <div className="uni-content--tag">{name.uniTag}</div>
                </div>
                <div className="uniname-para">
                  <p>{name.uniPara1}</p>
                  <p>{name.uniPara2}</p>
                  <p>{name.uniPara3}</p>
                  <p>{name.uniPara4}</p>
                  <p>{name.uniPara5}</p>
                  <p>{name.uniPara6}</p>
                  <p>{name.uniPara7}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UniName;
