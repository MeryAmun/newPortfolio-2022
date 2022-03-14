import React from 'react';
import './about.css'
import { me2} from '../../Assets/index'
import { FaAward, FiUsers, VscFolderLibrary } from "../Nav/index";

const About = () => {
  return (
    <section id="about">
      <h5>What you need to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={me2} alt="About Image" className="about__me-img" />
        </div>
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae saepe hic repudiandae itaque tempore autem amet nobis dolorum dignissimos, deserunt suscipit, sunt inventore eaque, voluptatibus quam necessitatibus? Explicabo, laboriosam impedit?</p>
       <a href="" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About