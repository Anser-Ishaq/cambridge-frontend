import React from "react";
import ReactPlayer from "react-player/youtube";
import videoImg from "./../Images/roundVideoPoster.jpg";
// import roundImg from "./../Images/roundImg.jpg"
import roundImg from "./../Images/prices.jpg";
import { BsArrowRight } from "react-icons/bs";
import "./Round.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Round() {
  let navigate = useNavigate();
  function handlePriceBox() {
    navigate("/services");
  }

  return (
    <>
      <div className="round-container">
        <div className="round-container--inner"></div>
        <div className="round-content">
          <div className="round-content--left">
            <div className="round-content--title">Prices</div>
            <div className="round-content--para">
              <p>
                We have kept our fee structure very simple and transparent; it
                is divided in two parts
              </p>
              <p>
                <span style={{ fontWeight: "700" }}>
                  Part 1 <br />
                </span>
                Initial fee, this is €1000, and it is to be paid before the
                application is submitted to the university. This fee covers
                costs incurred for the translation, legalization, notarisation,
                and university registration fees.
              </p>
              <p>
                <span style={{ fontWeight: "700" }}>
                  Part 2 <br />
                </span>
                Final fee, this is €1000 and is only payable on successful
                applications only, this fee is due after you have received your
                acceptance letter from the university.
              </p>
            </div>
            <div className="round-content--btn">
              <button onClick={handlePriceBox} className="round-btn--inner">
                FIND OUT MORE
              </button>
              <BsArrowRight
                className="btn-icon--inner"
                style={{ color: "white" }}
              />
            </div>
          </div>
          <div className="round-content--right">
            <div className="round-content-img">
              <img className="round-img--inner" src={roundImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Round;
