import React from 'react'
import "./cardsArr"

import "./Cards.css"
import cardsData from './cardsArr';
function Cards() {
  return (
    <div className='card-container'>
        {cardsData.map((card, index)=>
        <div key= {card.id} className={index==0?"card-container--inner1" : index==2?"card-container--inner2":"card-container--inner"}>
            <div className="card-content">
            <div className={index==0 ? "card-img1" : index==1 ? "card-img2" : index==2 ? "card-img3" : ""}>
                   <span className='card-img--inner'>{card.cardImg}</span>   
            </div>
            <div className="card-title">
                {card.cardTitle}
            </div>
            {/* <div className="card-para">
                {card.cardtag}
            </div> */}
            <div className="card-list">
                <ul><li>{card.cardTag1}</li></ul>
                <ul><li>{card.cardTag2}</li></ul>
                <ul className={index==0? 'second--card':index==2?'second--card':index==1?'hide-second--card':""}><li>{card.cardTag3}</li></ul>
                <ul style={{visibility:"hidden", height:"20px"}}><li>{card.cardTag3}</li></ul>  
            </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default Cards;