import React from 'react';
import './portfolio.css'
import { resources } from './data';
import{ LightSpeed,Bounce}from 'react-reveal';

const Portfolio = () => {
  return (
    <section id="portfolio">
    <Bounce top>
    <h5>My Recent Work</h5>
     <h2>Portfolio</h2>
    </Bounce>
     <div className="container portfolio__container">
  {
    
  resources.map((resource, index) => (
   <LightSpeed right>
     <article className="portfolio__item" key={index}>
    <div className="portfolio__item-image">
      <img src={resource.image} alt="" />
    </div>
<h3>{resource.title}</h3>
<div className="portfolio__item-cta">
<a href={resource.github} className="btn" target='_blank' rel="noreferrer">GitHub</a>
<a href={resource.live} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
</div>
<p className="text-light">
  {resource.description}
</p>
</article>
   </LightSpeed>
  ))
  }
  </div>
    </section>
  )
}

export default Portfolio