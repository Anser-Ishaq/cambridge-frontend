import React from 'react'
import Servicedetails from '../ServiceDetails/ServiceDetails';
import ServiceHome from '../ServiceHome/ServiceHome';
import Navbar from '../../Navbar/Navbar';
import FooterNew from '../../Footer/FooterNew';
import ServicePrices from '../ServicePrices/ServicePrices';
function ServiceMain() {
  return (
    <div className='service-main'>
      <Navbar/>
        <ServiceHome/>
        <Servicedetails/>
        <ServicePrices/>
        <FooterNew/>
    </div>
  )
}

export default ServiceMain;