import React from 'react';
import { me } from '../../Assets';
import CTA from './CTA';
import './header.css'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
     <div className="container header__container">
   <h5>Hello I'm</h5>
   <h1>Chebesi EdyLionel Awah</h1>
   <h5 className="text-light">
     Full Stack Developer
   </h5>
   <CTA/>
   <HeaderSocials/>

   <div className="me">
     <img src={me} alt="Me" />
   </div>

   <a href="#contact" className="scroll__down">Scroll Down</a>
     </div>
    </header>
  )
}

export default Header