import React from 'react'
import ReactPlayer from "react-player/youtube";
import videoImg from "./../Images/roundVideoPoster.jpg"
import roundImg from "./../Images/roundImg.jpg"
import {BsArrowRight} from "react-icons/bs"
import "./Round.css"
function Round() {
  return (
    <>
    <div className='round-container'>
        <div className="round-container--inner">
            <div className="round-video">
                <ReactPlayer className="round-video--inner"
                light={videoImg}
                 muted={true}
                //  loop={true}
                 playing={false}
                url="https://www.youtube.com/embed/9GNcIHQz0JU?feature=oembed"
                
                />
                
            </div>

        </div>
        <div className="round-content">
            <div className="round-content--left">
                <div className="round-content--title">The gold standard teaching qualification </div>
                <div className="round-content--para">CELTA is a qualification for teaching English as a foreign language. It focuses on developing practical skills with real practical teaching practice, which will provide you with the techniques and confidence you need to begin teaching as soon as you finish the course.</div>
                <div className="round-content--btn">
                    <button className='round-btn--inner'>FIND OUT MORE</button>
                    <BsArrowRight className='btn-icon--inner' style={{color:"white"}} />
                </div>
            </div>
            <div className="round-content--right">
                <div className="round-content-img"></div>
                <img className='round-img--inner' src={roundImg} alt="" />
            </div>
            </div>
    </div>
    
    </>
  )
}

export default Round