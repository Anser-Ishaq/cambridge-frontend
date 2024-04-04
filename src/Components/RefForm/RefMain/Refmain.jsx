import React from 'react'
import Refhome from '../RefHome/Refhome';
 
import Navbar from '../../Navbar/Navbar';
import FooterNew from '../../Footer/FooterNew';
import Refform from '../Ref-form/ref-form';
import RefCards from '../RefCards/RefCards';
function Refmain() {
  return (
    <div className='ref-main'>
      <Navbar/>
        <Refhome/>
        <Refform/>
        <RefCards/>
       <FooterNew/>
    </div>
  )
}

export default Refmain;