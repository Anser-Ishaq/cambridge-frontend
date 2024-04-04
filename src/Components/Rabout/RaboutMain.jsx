import React from 'react'
import FooterNew from '../Footer/FooterNew';
import Navbar from '../Navbar/Navbar';
import Rabout from './Rabout/Rabout';
import Rhome from './Rhome/Rhome';

function RaboutMain() {
  return (
    <div className='Rabout-main'>
         <Navbar/>
<Rhome/>
<Rabout/>

         <FooterNew/>
 

    </div>
  )
}

export default RaboutMain;