import React from "react";
import "./ServiceDetails.css";
import ServiceDetailArr from "./ServiceDetailsArr";
import curve from "../../Images/stepsImg.png";
function Servicedetails() {
  return (
    <>
      <div className="servicedetail-container">
        <div className="servicedetail-container--inner">
          <p>
            Ace Med Admission applies on your behalf to allow you to achieve the
            goal of being a future medical professional. Through our experience
            with universities, legal and translation contacts; knowledge of the
            system of application, and having completed the process ourselves,
            we can greatly increase your chances of admission to study the
            course of your choosing.
          </p>
          <p>
            We will evaluate your file, getting all the confusing, tedious and
            complicated work done on your behalf.
          </p>
          <p>
            We then will review your file and recommend to you where you will
            have the best chance of admission given your own interests.
          </p>
          <p>
            Your file will then be submitted in the correct format, in the
            correct way at the correct time.
          </p>
          <p>
            For Non-EU students we will explain the visa process and guide you
            in getting your documents approved so you can have the peace of mind
            that this will be attended to.
          </p>
          <p>
            To help you understand the process and our fee structure clearly, we
            have explained it below.
          </p>
        </div>

        <div className="servicedetail-curvy--img">
          <img className="servicedetail-img--inner" src={curve} alt="" />
        </div>

        <div className="servicedetail-steps--title">Steps</div>
        <div className="servicedetail-steps">
          {ServiceDetailArr.map((Servicecards, index) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className="servicedetail-steps--inner"
            >
              <div className="servicedetail-icons">
                <div
                  className={
                    index == 0
                      ? "servicedetail-icons--inner1"
                      : index == 1
                      ? "servicedetail-icons--inner2"
                      : index == 2
                      ? "servicedetail-icons--inner3"
                      : index == 3
                      ? "servicedetail-icons--inner4"
                      : index == 4
                      ? "servicedetail-icons--inner5"
                      : index == 5
                      ? "servicedetail-icons--inner6"
                      : index == 6
                      ? "servicedetail-icons--inner7"
                      : index == 7
                      ? "servicedetail-icons--inner8"
                      : ""
                  }
                >
                  {Servicecards.serviceStepIcon}
                </div>
              </div>
              <div className="servicedetail-title">
                {Servicecards.serviceStepTitle}
              </div>
              <div className="servicedetail-para">
                {Servicecards.serviceStepPara}
              </div>
            </div>
          ))}
        </div>

       
        <div className="servicedetail-success">
        <div className="servicedetail-success--bottom">
          In case your application is unsuccessful, YOU DON'T PAY OUR FINAL FEE!
        </div>
          <div className="servicedetail-success--title">
            After your successful acceptance
          </div>
          <div className="servicedetail-success--para">
            We provide you with key important information about the university,
            country, travel, accommodation and getting set up.{" "}
          </div>
          <div className="servicedetail-success--list">
            <div className="servicedetail-success--list_title">
              We will arrange
            </div>
            <ul className="servicedetail-success--list_inner">
              <li>Airport pickup</li>
              <li>Reservation at a hotel for the first days </li>
              <li>University and city tour</li>
              <li>Enrolment at the University</li>
              <li>Assistance in finding a suitable accommodation</li>
              <li>Assistance with opening a bank account</li>
              <li>
                Assistance with choosing a provider for internet, phone, TV
              </li>
              <li>Free prepaid mobile card</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicedetails;
