import React from 'react';
import Faqhome from '../FaqHome/Faq';
import Navbar from '../../Navbar/Navbar';
import FooterNew from '../../Footer/FooterNew';
import Faqaccordian from '../FaqAccordian/Accordian';
 
function FaqMain() {
  return (
    <div className='faq-main'> 
    <Navbar/>
    <Faqhome/>
    <Faqaccordian/>
    <FooterNew/>
    </div>
  )
}

export default FaqMain;