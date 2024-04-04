import React from 'react'
import "./aboutArr"
import "./About.css"
import aboutArr from './aboutArr';
function About() {
  return (
    <div className='about-container'>
        <div className="about-upper--content">
        <div className="about-title">Our Mission</div>
        <div className="about-para">
        Our mission is to give you the best chance you have to get a medical degree, which is automatically accepted across the Eu, Ireland, UK and recognised around the rest of the world.
        </div>
        <div className="about-upper--lists">
         <ul>
            <li>We have personal up-to-date knowledge of the application process and admission standards.</li>
            <li>We know the Universities where you have the best chance of admission.</li>
            <li>We will help you from the start of the application process, until you are fully accepted and admitted to the course of your choosing.</li>
            <li>We will not waste your time, money or undermine our own reputation.</li>
         </ul>
        </div>
        </div>
        <div className="about-cards">
        {aboutArr.map((about, index)=>
        <div key={about.id} className={index==0 ? "about-container--inner0" : "about-container--inner1"}>
            <div className="about-inner-content">
             <div className={index==0 ? "about-inner--title0" : "about-inner--title1"}>{about.aboutTitle}</div>
             {/* <div className={index==0 ? "about-inner--date0" : "about-inner--date1"}>{about.aboutDate}</div> */}
             {/* <div className={index==0 ? "about-inner--month0" : "about-inner--month1"}>{about.aboutMonth}</div> */}
             {/* <span className={index==0 ? "about-summary" : "about-summary1"}>{about.aboutSum}</span> */}
             <div className={index==0 ? "about-lists" : "about-lists1"}>
             <ul>
                <li>{about.list1}</li>
                <li>{about.list2}</li>
                <li>{about.list3}</li>
                <li>{about.list4}</li>
                <li>{about.list5}</li>
                {/* <li>{about.list6}</li>
                <li>{about.list7}</li>
                <li>{about.list8}</li>
                <li>{about.list9}</li>
                <li>{about.list10}</li>
                <li>{about.list11}</li>
                <li>{about.list12}</li>
                <li>{about.list13}</li> */}
             </ul>
             </div>
             {/* <div className={index==0 ? "about-btn" : "about-btn1"}>
                <button className={index== 0 ?"about-btn--inner" : "about-btn--inner1"}>{about.aboutBtn}</button>
             </div> */}
             </div>
        </div>
       )}
       </div>
    </div>
  )
}

export default About;