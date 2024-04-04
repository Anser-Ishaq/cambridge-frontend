import React from 'react'
import curve from "../../Images/stepsImg.png"
import "./ServicePrices.css"
function ServicePrices() {
  return (
    <>
    <div className="servicedetail-curvy--img">
        <img className="servicedetail-img--inner" src={curve} alt="" />
      </div>
    <div className='serviceprices-container'>
   <div className="serviceprices-container--inner">
     <div className="serviceprices-title">Prices</div>
     {/* <div className="serviceprices-tag">We have kept our fee structure very simple and transparent; it is divided in two parts.</div> */}
     <div className="serviceprices-content">
        <p>Applicants can apply to multiple universities to further improve their chance of getting accepted. This can be done at a discounted rate as we are able to use some of the documents from your first application. As there are different costs and requirements associated with different students. This fee is divided into two categories, EU Students and NON-EU students.</p>
        <p>EU Students only need to pay an additional €500 to apply to each subsequent university.
NON-EU Students only need to pay an additional €750 to apply to each subsequent university.
</p>

<div className="serviceprices-content--example">
<p className='serviceprices-content--example--title' >Examples</p>
<ul className='servieprices-lists'>
<h style={{fontWeight:"bold"}}>EU student; 3 university applications</h>
<li>Initial Application fee = €1000</li>
<li>2nd Application fee for 2nd University = €500</li>
<li>3rd Application fee for 3rd University = €500</li>
<li>Total Initial Fee to apply to 3 universities = €2000</li>

<h style={{fontWeight:"bold"}}>NON-EU student; 2 university applications</h>
<li>Initial Application fee = €1000</li>
<li>2nd Application fee for 2nd University = €750</li>
<li>Total Initial Fee to apply to 2 universities = €1750</li>
</ul>

</div>

     </div>
    </div>           
</div>
</>
  )
}

export default ServicePrices;