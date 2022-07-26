import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Richardd82</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>      

      <div className="footer__socials">
        <a href="https://facebook.com/richardd82" target='_blank'><FaFacebookF size={40}/></a>
        <a href="https://www.instagram.com/richadd82.dev/" target='_blank'><GrInstagram size={40}/></a>
        <a href="https://twitter.com/Richardd82_dev" target='_blank'><FaTwitter size={40}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Richardd82 content. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer