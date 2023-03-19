import React, { useState } from 'react';
import './nav.css'
import {AiOutlineHome, AiOutlineUser,BiBook,RiServiceLine,BiMessageSquareDetail} from './index'



const Nav = () => {
  const [activeNow, setActiveNow] = useState('#')
  return (
   <nav>
     <a href="#go" onClick={() => setActiveNow('#')} className={activeNow === '#' ? 'active' : ''}><AiOutlineHome/></a>
     <a href="#about" onClick={() => setActiveNow('#about')}rel="noreferrer" className={activeNow === '#about' ? 'active' : ''}><AiOutlineUser/></a>
     <a href="#experience" onClick={() => setActiveNow('#experience')}rel="noreferrer"  className={activeNow === '#experience' ? 'active' : ''}><BiBook/></a>
     <a href="#portfolio" onClick={() => setActiveNow('#portfolio')}rel="noreferrer"  className={activeNow === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
     <a href="#contact" onClick={() => setActiveNow('#contact')} rel="noreferrer" className={activeNow === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav