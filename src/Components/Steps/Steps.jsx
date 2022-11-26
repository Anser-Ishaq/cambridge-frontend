import React from 'react'
import "./stepArr"
import stepArr from './stepArr';

function Steps() {
  return (
    <div className='step-container'>

        <div className="step-title">Simple steps to succeed</div>
        <div className="step-cards">
{stepArr.map ((card, index)=>
        <div className="step-container--inner">
            <div className="step-card--img">
                <span className='step-img--inner'>{card.stepIcon}</span>
            </div>
          <div className="step-title">{card.stepTitle}</div>
<div className="step-para">{card.stepPara}</div>
        </div>
)}
        </div>
         </div>
  )
}

export default Steps;