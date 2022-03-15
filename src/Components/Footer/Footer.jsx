import React from 'react';
import './footer.css'
import { FaFacebookF, FiGithub,IoLogoLinkedin } from '../Nav';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">____________________</a>
<ul className="permalinks">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
<div className="footer__socials">
  <a href="https://web.facebook.com/suso.che" target='_blank'><FaFacebookF/></a>
<a href="https://github.com/MeryAmun?tab=overview&from=2022-03-01&to=2022-03-14" target='_blank'><FiGithub/></a>
<a href="https://www.linkedin.com/in/chebesi-awah-b891331ab/" target='_blank'><IoLogoLinkedin/></a>
</div>
<div className="footer__copyright">
  <small>&copy; CHEBS Portfolio 2022. All Rights Reserved</small>
</div>
    </footer>
  )
}

export default Footer