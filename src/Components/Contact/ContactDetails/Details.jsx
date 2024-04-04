import React from 'react'
// import "detailsArr"
import detailsArr from "./DetailsArr"
import "./Details.css"
function Details() {
  return (
    <div className="contact-details--main">

<div className="contact-details">
{detailsArr.map((det, index)=>
  <div className="contact-details--inner"> 
 <div className="contact-details--title">{det.ContactTitle}</div>

<div className={index==0?"contact-details--content":"contact-details--content1"}>
 
 <div className="details-timing">
    <div className="detail-days">
  <span>{det.ContentDays1}</span>  
  <p style={{margin:"0"}}>{det.ContentDays2}</p>  
  <span>{det.ContentDays3}</span>  
    </div>
    <div className="details-timings">
  <span>    {det.ContentTime1}</span>  
  <p style={{margin:"0"}}>    {det.ContentTime2}</p>  
  <span>    {det.ContentTime3}</span>  
    </div>
 </div>
 <div className="details-para">
    {det.ContactPara}
 </div>

</div>


  </div>
)}
  </div>
 </div>
  )
}

export default Details;