import React from 'react';
import './footer.css'
import { FaFacebookF, FiGithub,IoLogoLinkedin } from '../Nav';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">CHEBS</a>
<ul className="permalinks">
  <li><a href="#"></a>Home</li>
  <li><a href="#about"></a>About</li>
  <li><a href="#experience"></a>Experience</li>
  <li><a href="#portfolio"></a>Portfolio</li>
  <li><a href="#contact"></a>Contact</li>
</ul>
<div className="footer__socials">
<li><a href="https://web.facebook.com/suso.che"><FaFacebookF/></a></li>
<li><a href="https://github.com/MeryAmun?tab=overview&from=2022-03-01&to=2022-03-14"><FiGithub/></a></li>
<li><a href="https://www.linkedin.com/in/chebesi-awah-b891331ab/"></a><IoLogoLinkedin/></li>
</div>
<div className="footer__copyright">
  <small>&copy; CHEBS Portfolio 2022. All Rights Reserved</small>
</div>
    </footer>
  )
}

export default Footer