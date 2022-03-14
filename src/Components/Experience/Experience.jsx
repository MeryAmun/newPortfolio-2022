import React from 'react';
import './experience.css'
 import dataFrontend, { dataBackend } from './data'

const Experience = () => {
  return (
   <section id="experience">
     <h5>My Skills</h5>
     <h2>My Experience</h2>
     <div className="container experience__container">
       <div className="experience__frontend">
         <div className="experience__content">
           {
             dataFrontend.map((item) => (
              <article className="experience__details">
               <div className="experience__details-icon">
                {item.icon}
                </div>
              <div>
              <h4>{item.skill}</h4>
              <small className="text-light">{item.experience}</small>
              </div>
            </article>
             ))
           }
         </div>
       </div>
       <div className="experience__backend">
         <div className="experience__content">
           {
             dataBackend.map((item, index) => (
              <article className="experience__details" key={index}>
                <div className="experience__details-icon">
                {item.icon}
                </div>
             <div>
             <h4>{item.skill}</h4>
              <small className="text-light">{item.experience}</small>
             </div>
            </article>
             ))
           }
         </div>
       </div>
     </div>
   </section>
  )
}

export default Experience