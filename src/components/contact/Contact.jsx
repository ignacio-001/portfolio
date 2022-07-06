import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5wtck16', 'template_9unmzxp', form.current, 'zuQ11gLSJJLFk7Of9');
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__container container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tsk7558@gmail.com</h5>
            <a href="mailto:tsk7558@gmail.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tsk7558@gmail.com</h5>
            <a href="mailto:tsk7558@gmail.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>tsk7558@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+919420240574" target='_blank'> Send a message</a>
          </article>
        </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name ' required />
        <input type="email" name='email' placeholder='Your email ' required />
        <textarea name="message"   rows="7" placeholder='Your Message' required></textarea>
        <button type='submit'className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact