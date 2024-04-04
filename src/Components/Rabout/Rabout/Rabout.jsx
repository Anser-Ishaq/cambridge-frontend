import React from "react";
import "./Rabout.css";
import RaboutArr from "./RaboutArr";
import curves from "../../Images/stepsImg.png"
function Rabout() {
  return (
    <>
      
      {/* <div className="Rabout-curvy--img">
        <img className="Rabout-curvy--img_inner" src={curves} alt="" />
      </div> */}

      <div className="Rabout-container">

<div className="Rabout-upper--content">
        <div className="Rabout-title">About Romaina</div>
        <div className="Rabout-lists">
          <ul>
            <li>Location: (Southeastern) Central Europe</li>
            <li>Time Zone: GMT + 2</li>
            <li>
              Area: 92,043 sq. miles (238,391 sq. km) Flag of Romania: Three
              vertical stripes: blue, yellow and red.
            </li>
            <li>
              Population: 22,089,000 (April 2021 - based on declared residence
              address)
            </li>
            <li>
              Largest cities: Bucharest (2,151,400), Iasi (387,100), Cluj Napoca
              (327,200), Timisoara (325,300), Constanta (311,300), Galati
              (306,400), Craiova (299,700), Brasov (289,500), Ploiesti
              (225,000), Oradea (221,400), Braila (200,100),{" "}
            </li>
            <li>
              Currency: Leu ( plural Lei — pronunciation "lay" — abbreviations:
              Lei or RON )
            </li>
            <li>Capital: Bucharest ( București)</li>
            <li>
              Romania is a member state of the European Union (EU) and North
              Atlantic Treaty Organization (NATO)
            </li>
            <li className="Rabout-weather--title">Weather</li>
          </ul>
        </div>

        <div className="Rabout-weather">
          {/* <div className="Rabout-weather--title">Weather</div> */}
          <div className="Rabout-weather--para">
            Romania has a temperate climate,with four distinct seasons. Spring
            is pleasant with cool mornings and nights and warm days. Summer is
            quite warm, with extended sunny days. The hottest areas in summer
            are the lowlands in southern and eastern Romania where 37 C is often
            reached in July and August. Temperatures are always cooler in the
            mountains. Autumn is dry and cool, with fields and trees producing
            colorful foliage. Winters can be cold, especially in the mountains.
            While not the rule, abundant snowfalls may occur throughout the
            country, from December to mid-March. There are significant regional
            differences in the climate between different regions of Romania.
          </div>
        </div>
        </div>

 <div className="Rabout-curvy--img">
        <img className="Rabout-curvy--img_inner" src={curves} alt="" />
      </div>

        <div className="Rabout-container--inner">
          <div className="Rabout-cardTitle">Cities</div>
          {RaboutArr.map((Rcard, index) => (
            <div className={index % 2 == 0 ? "Rabout-card2" : "Rabout-card"}>
              <div data-aos="fade-right" data-aos-duration="3000" className="Rabout-img--side">
                <div className="mob-Rabout-city--name ">
                  {Rcard.RaboutCityName}
                </div>
                <div className="Rabout-card-img">
                  <img
                    className="Rabout-card--img_inner"
                    src={Rcard.RaboutImg}
                    alt=""
                  />
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="Rabout-content">
                <div className="desk-Rabout-city--name">
                  {Rcard.RaboutCityName}
                </div>

                <div className="Rabout-para">{Rcard.RaboutPara}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Rabout;
