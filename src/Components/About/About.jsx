import React from 'react'
import "./aboutArr"
import "./About.css"
import aboutArr from './aboutArr';
function About() {
  return (
    <div className='about-container'>
        <div className="about-upper--content">
        <div className="about-title">About Us</div>
        <div className="about-para">
        Founded in 2003, The Exam Centre of Ireland Ltd (fondly known as The English Academy) is a Cambridge English Platinum and Teaching Awards Centre. We have been successfully running Cambridge CELTA courses for over a decade now and our experienced tutors have trained literally 1’000s of teachers who have gone on to have wonderfully enriching and successful careers in around the world teaching English as a foreign language.
        </div>
        </div>
        <div className="about-cards">
        {aboutArr.map((about, index)=>
        <div className={index==0 ? "about-container--inner0" : "about-container--inner1"}>
            <div className="about-inner-content">
             <div className={index==0 ? "about-inner--title0" : "about-inner--title1"}>{about.aboutTitle}</div>
             <div className={index==0 ? "about-inner--date0" : "about-inner--date1"}>{about.aboutDate}</div>
             <div className={index==0 ? "about-inner--month0" : "about-inner--month1"}>{about.aboutMonth}</div>
             <span className={index==0 ? "about-summary" : "about-summary1"}>{about.aboutSum}</span>
             <div className={index==0 ? "about-lists" : "about-lists1"}>
             <ul>
                <li>{about.list1}</li>
                <li>{about.list2}</li>
                <li>{about.list3}</li>
                <li>{about.list4}</li>
                <li>{about.list5}</li>
                <li>{about.list6}</li>
                <li>{about.list7}</li>
                <li>{about.list8}</li>
                <li>{about.list9}</li>
                <li>{about.list10}</li>
                <li>{about.list11}</li>
                <li>{about.list12}</li>
                <li>{about.list13}</li>
             </ul>
             </div>
             <div className={index==0 ? "about-btn" : "about-btn1"}>
                <button className={index== 0 ?"about-btn--inner" : "about-btn--inner1"}>{about.aboutBtn}</button>
             </div>
             </div>
        </div>
       )}
       </div>
    </div>
  )
}

export default About;