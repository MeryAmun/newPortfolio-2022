import React from 'react';
import './contact.css'
import { BsWhatsapp, MdOutlineEmail, RiMessengerLine } from '../Nav';

const Contact = () => {
  return (
    <section id="contact">
       <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
<article className="contact__option">
  <MdOutlineEmail/>
  <h4>Email</h4>
  <h5>chebesiawah@gmail.com</h5>
  <a href="mailto:chebesiawah@gmail.com" target='_blank'>Send a Message</a>
</article>
<article className="contact__option">
  <RiMessengerLine/>
  <h4>Messenger</h4>
  <h5>Chebs Suso</h5>
  <a href="https://m.me/suso.che/" target='_blank'>Send a Message</a>
</article>
<article className="contact__option">
  <BsWhatsapp/>
  <h4>WhatsApp</h4>
  <h5>+237677972126</h5>
  <a href="https://api.whatsapp.com/send?phone=+237677972126" target='_blank'>Send a Message</a>
</article>
      </div>
      {/* end of contact option */}
      <form action="">
        <input type="text"  name='name' placeholder='Your Full Name' required/>
        <input type="text"  name='email' placeholder='Your Full Email' required/>
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className="btn btn-primary">Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact