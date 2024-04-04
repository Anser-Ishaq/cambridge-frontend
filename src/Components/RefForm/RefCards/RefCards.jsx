import React from "react";
import "./RefCards.css";
import curve from "../../Images/stepsImg.png";
import RefcardArr from "./RefCardArr";
function RefCards() {
  return (
    <>
      <div className="refcard-curvy--img">
        <img className="refcard-img--inner" src={curve} alt="" />
      </div>
      <div className="refcard-container">
        <div className="refcard-title">Steps</div>
        <div className="refcard-container--inner">
          {RefcardArr.map((refcards, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="refcards--inner"
            >
              <div
                className={
                  index == 0
                    ? "refcards-icon1"
                    : index == 1
                    ? "refcards-icon2"
                    : index == 2
                    ? "refcards-icon3"
                    : index == 3
                    ? "refcards-icon4"
                    : ""
                }
              >
                <div className="refcards-icons--inner">
                  {refcards.RefcardIcon}
                </div>
              </div>
              <div className="refcard-title--inner">
                {refcards.RefcardTitle}
              </div>
              <div className="refcard-detail">{refcards.RefcardDetail}</div>
            </div>
          ))}
        </div>

        <div className="refcard-terms">
          <div className="refcard-terms--inner">
            <div className="refcard-terms--title">Terms and Conditions</div>
            <ul className="refcard-terms--list">
              <li>Referrals = €100 per complete student admission.</li>
              <li>
                Referral scheme submission must be completed before the
                applicant referred completes their application form.
              </li>
              <li>
                A referral is valid when the applicant you refer has completed
                the application process.
              </li>
              <li>
                Their completed application Must include the name of the person
                who referred them.
              </li>
              <li>The more applicants you refer, the more you get back.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefCards;
