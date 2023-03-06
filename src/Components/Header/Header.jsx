import React from 'react';
import CTA from './CTA';
import './header.css'
import HeaderSocials from './HeaderSocials';
import Slide from 'react-reveal/Slide';


const Header = () => {
  return (
    <header>
     <div className="container header__container">
       
   <Slide right>
   <h5>Hello I'm</h5>
   <h1>Chebesi EdyLionel Awah</h1>
   <h5 className="text-light">
     Full Stack Developer
   </h5>
   </Slide>
 
   <HeaderSocials/>

   <CTA/>

   <a href="#contact" className="scroll__down" rel="noreferrer" >Scroll Down</a>
     </div>
    </header>
  )
}

export default Header