import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__container container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>tsk7558@gmail.com</h5>
            <a href="mailto:tsk7558@gmail.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>tsk7558@gmail.com</h5>
            <a href="mailto:tsk7558@gmail.com"> Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMail/>
            <h4>WhatsApp</h4>
            <h5>tsk7558@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+919420240574" target='_blank'> Send a message</a>
          </article>
        </div>
      <form action="">
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