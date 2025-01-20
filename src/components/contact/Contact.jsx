import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_30jnl8h', 'template_88gzg4p', form.current, 'p3ZjTgeLMPHatE6S_')
    console.log(form.current)
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Conóceme</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail size={40} className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ricardo.diaz@richadd.dev</h5>
            <a href="mailto:ricardo.diaz@richadd.dev" target='_blank' rel="noreferrer">Send a message</a>
          </article><article className="contact__option">
            <BsMessenger size={40} className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ricardo Díaz</h5>
            <a href="https://m.me/richardd82" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp size={40} className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+52)5569790254</h5>
            <a href="https://wa.me/+525569790254" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact