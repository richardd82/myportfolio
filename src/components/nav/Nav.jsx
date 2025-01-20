import React from 'react'
import './nav.css'
import {BiHomeSmile} from "@react-icons/all-files/bi/BiHomeSmile"
import {AiOutlineUser} from "@react-icons/all-files/ai/AiOutlineUser"
import {MdWorkOutline} from "react-icons/md"
import {BiCodeBlock} from "react-icons/bi"
import { GiBrain } from "react-icons/gi";
// import {GoMailRead} from "react-icons/go"
import { MdOutlineAttachEmail } from "react-icons/md";
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
  <nav>
    <a href="#home"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><BiHomeSmile size={25}/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser size={25}/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBrain size={25}/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiCodeBlock size={25}/></a>
    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline size={25}/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineAttachEmail size={25}/></a>
  </nav>
  )
}

export default Nav