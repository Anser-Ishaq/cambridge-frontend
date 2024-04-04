import React from 'react'
import wave from "./../../Images/stepsImg.png"
import {BsArrowRight} from "react-icons/bs"
import "./Admission.css"
function Admission() {
  return (
    <> 
     <div id='Admission' className="admission-img">
    <img className='admission-img--inner' src={wave} alt="" />
    </div>
    <div  className="admission-container">

<div className="admission-title">Admisison Inquiry</div>

<div className="admission-input">
    <input placeholder='Your Name' type="text" />
    <input placeholder='Your Phone' type="number" />
    <input placeholder='Your Email Address' type="text" />
    <input placeholder='Intrested In' type="text" />
    <input placeholder='Anticipated Start Date' type="text" />
    <textarea placeholder='Message' name="" id="" ></textarea>
    <div  className="admission-btn">
    <button className='admission-btn--inner'>Submit</button>
    <BsArrowRight className='admission-icon--inner' style={{color:"white"}} />
    </div>
</div>
  </div>
    </>
  )
}

export default Admission;