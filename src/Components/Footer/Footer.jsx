import React from 'react';
import './footer.css'
import { FaFacebookF, FiGithub,IoLogoLinkedin } from '../Nav';

const Footer = () => {
  return (
    <footer>
      <a href="#go" className="footer__logo">___________</a>
<ul className="permalinks">
  <li><a href="#go" rel="noreferrer">Home</a></li>
  <li><a href="#about" rel="noreferrer">About</a></li>
  <li><a href="#experience" rel="noreferrer">Experience</a></li>
  <li><a href="#portfolio" rel="noreferrer">Portfolio</a></li>
  <li><a href="#contact" rel="noreferrer">Contact</a></li>
</ul>
<div className="footer__socials">
  <a href="https://web.facebook.com/suso.che" target='_blank' rel="noreferrer"><FaFacebookF/></a>
<a href="https://github.com/MeryAmun?tab=overview&from=2022-03-01&to=2022-03-14" target='_blank' rel="noreferrer"><FiGithub/></a>
<a href="https://www.linkedin.com/in/chebesi-awah-b891331ab/" target='_blank' rel="noreferrer"><IoLogoLinkedin/></a>
</div>
<div className="footer__copyright">
  <small>&copy; CHEBS Portfolio 2022. All Rights Reserved</small>
</div>
    </footer>
  )
}

export default Footer