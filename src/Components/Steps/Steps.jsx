import React from "react";
 
import "./stepArray"
import accordianImg from "./../Images/stepAccordian.webp";
import Accordion from "react-bootstrap/Accordion";
import Curves from "./../Images/stepsImg.png"
import { BsArrowRight } from "react-icons/bs";

import "./Steps.css";
import stepArray from "./stepArray";
function Steps() {
  return (
    <>
    <div className="step-back--img">
      <img className="step-back--img_inner" src={Curves}alt="" />
    </div>
      <div className="step-background">
        <div className="step-container">
          <div className="step-title">Simple steps to succeed</div>
          <div className="step-cards">
            {stepArray.map((stepcard, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                key={stepcard.id}
                className="step-container--inner"
              >
                <div
                  className={
                    index == 0
                      ? "step-card--img1"
                      : index == 1
                      ? "step-card--img2"
                      : index == 2
                      ? "step-card--img3"
                      : index == 3
                      ? "step-card--img4"
                      : ""
                  }
                >
                  <span className="step-img--inner">{stepcard.stepIcon}</span>
                </div>
                <div className="step-card--title">{stepcard.stepTitle}</div>
                <div className="step-card--para">{stepcard.stepPara}</div>
              </div>
            ))}
          </div>
          <div style={{display:"none"}}  className="step-accordian">
            <div className="accordian-title">
              Requirements for part-time online CELTA
            </div>
            <div className="accordian-content">
              <div className="accordian-img--side">
                <div className="accordian-img">
                  <img
                    className="accordian-img--inner"
                    src={accordianImg}
                    alt=""
                  />
                </div>
                <div className="accordian-img--title">
                  Gareth Gallagher – Ireland.
                </div>
                <div className="accordian-tag">
                  Recent CELTA graduate now working successfully in Hong Kong.
                </div>
              </div>
              <div className="accordian-main">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      A reliable internet connection.
                    </Accordion.Header>
                    <Accordion.Body>
                      A stable internet connection of at least 5mbps download,
                      preferably {">"}15mbps
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      A desktop or laptop computer
                    </Accordion.Header>
                    <Accordion.Body>
                      A mobile phone, tablet or chromebook is not suitable for
                      this course. You will be typing regularly and will need to
                      have a word processing package such as Microsoft office or
                      Openoffice. You will also be given access to dropbox.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      A webcam attached to the computer you are using
                    </Accordion.Header>
                    <Accordion.Body>
                      The online CELTA is an interactive course and you will be
                      engaging with live tutors and students in the teaching
                      practice classes daily
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Microphone and speakers or suitable headset
                    </Accordion.Header>
                    <Accordion.Body>
                      We recommend testing your current equipment on
                      zoom.us/test in advance of the course to ensure everything
                      is working properly.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Suitably quiet place at home to work without distractions
                    </Accordion.Header>
                    <Accordion.Body>
                      CELTA is a stressful, tiring course. We say it’s like 4
                      weeks out of your life. Therefore it’s crucial you talk
                      with your family or housemates about the commitments
                      you’ll have to make prior to enrolling.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="accordian-down--btn">
                  <button className="accordian-btn--inner">ENROL TODAY</button>
                  <BsArrowRight
                    className="accordian-icon--inner"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
