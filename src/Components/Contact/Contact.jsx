import React, { useRef } from 'react';
import './contact.css'
import { BsWhatsapp, MdOutlineEmail, RiMessengerLine } from '../Nav';
import emailjs from 'emailjs-com'
import Slide from 'react-reveal/Slide';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xr4e20l', 'template_x7ywr4u', form.current, 'x_hwX49Ss0w32t96B')
    e.target.reset()
      
  };
  return ( 
    <section id="contact">
       <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
<Slide bottom>
<article className="contact__option">
  <MdOutlineEmail className='contact__option-icon'/>
  <h4>Email</h4>
  <h5>chebesiawah@gmail.com</h5>
  <a href="mailto:chebesiawah@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
</article>
</Slide>
<Slide right>
<article className="contact__option">
  <RiMessengerLine className='contact__option-icon'/>
  <h4>Messenger</h4>
  <h5>Chebs Suso</h5>
  <a href="https://m.me/suso.che/" target='_blank' rel="noreferrer">Send a Message</a>
</article>
</Slide>
<Slide top>
<article className="contact__option">
  <BsWhatsapp className='contact__option-icon'/>
  <h4>WhatsApp</h4>
  <h5>+237677972126</h5>
  <a href="https://api.whatsapp.com/send?phone=+237677972126" target='_blank' rel="noreferrer" >Send a Message</a>
</article>
</Slide>
      </div>
      {/* end of contact option */}
    <Slide left>
    <form ref={form} onSubmit={sendEmail}>
        <input type="text"  name='name' placeholder='Your Full Name' required/>
        <input type="text"  name='email' placeholder='Your Full Email' required/>
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className="btn btn-primary">Send Message</button>
      </form>
    </Slide>
    </div>
    </section>
  )
}

export default Contact