import React from 'react'
import FooterNew from '../../Footer/FooterNew';
import Navbar from '../../Navbar/Navbar';
import Portalform from '../PortalForm/PortalForm';
import "./PortalMain.css"
function Portalmain() {
  return (
    <div className='portalmain-container'>
      <Navbar/>
        <Portalform/>
        <FooterNew/>
    </div>
  )
}

export default Portalmain;