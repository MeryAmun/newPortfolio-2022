import React from 'react';
import './portfolio.css'
import { resources } from './data';

const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>
     <div className="container portfolio__container">
  {
    
  resources.map((resource) => (
    <article className="portfolio__item">
    <div className="portfolio__item-image">
      <img src={resource.image} alt="" />
    </div>
<h3>{resource.title}</h3>
<div className="portfolio__item-cta">
<a href={resource.github} className="btn" target='_blank'>GitHub</a>
<a href={resource.live} className="btn btn-primary" target='_blank'>Demo</a>
</div>
<p className="text-light">
  {resource.description}
</p>
</article>
  ))
  }
  </div>
    </section>
  )
}

export default Portfolio