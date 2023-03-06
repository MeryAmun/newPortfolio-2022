import React from 'react';
import { cv } from '../../Assets';
import './header.css'
import Zoom from 'react-reveal/Zoom';

const CTA = () => {
  return (
    <div className="cta">
       <Zoom top>
       <a href={cv} download className='btn' rel="noreferrer">Download CV</a>
        <a href="#contact" className='btn btn-primary' rel="noreferrer">Contact Me</a>
       </Zoom>
    </div>
  )
}

export default CTA