import React from 'react';
import './about.css'
import { me2} from '../../Assets/index'
import { FaAward, FiUsers, VscFolderLibrary } from "../Nav/index";
import Slide from 'react-reveal/Slide'

const About = () => {
  return (
    <section id="about">
      <h5>What you need to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
       <Slide right>
       <div className="about__me">
          <img src={me2} alt="About" className="about__me-img" />
        </div>
       </Slide>
       <Slide left>
       <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>I am a Full Stack Mobile Web and Mobile App Developer, and am very enthusiastic about creating high-performing web and mobile applications using the bets technologies. The tech sector is vast and ever changing which requires constant learning and relearning. This is what is most exciting about Software Development
            I am a good team player and also client relations.
I am interested in Music, Politics,Agriculture, Sports, and I look forward to connecting with you</p>
       <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
       </Slide>
      </div>
    </section>
  )
}

export default About