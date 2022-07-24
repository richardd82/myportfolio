import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaFreeCodeCamp} from 'react-icons/fa'
import {RiGithubLine} from 'react-icons/ri'
//import { BsLinkedin } from "@react-icons/all-files/bs/BsLinkedin";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/richardd82"  target='_blank' rel="noreferrer"><BsLinkedin size={40} /></a>
        <a href="https://github.com/richardd82"  target='_blank' rel="noreferrer"><RiGithubLine size={40} /></a>
        <a href="https://www.freecodecamp.org/fcc3900729e-458b-4caa-8b98-b397d29555ab" target='_blank' rel="noreferrer"><FaFreeCodeCamp size={40} /></a>
    </div>
  )
}

export default HeaderSocials