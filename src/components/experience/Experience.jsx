import React from 'react'
import './experience.css'
import {ImHtmlFive2} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Whats Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>        
          <div className="experience__content">
            <article className='experience__detail'>
              <SiJavascript size={30}/> 
              <h4 className='text-light'>Experienced</h4>
            </article>
            <article className='experience__detail'>
              <ImHtmlFive2 size={30}/> 
              <h4 className='text-light'>Experienced</h4>
            </article>
            <article className='experience__detail'>
              <SiCss3 size={30}/> 
              <h4 className='text-light'>Experienced</h4>
            </article>
            <article className='experience__detail'>
              <SiReact size={30}/> 
              <h4 className='text-light'>Experienced</h4>
            </article>
            <article className='experience__detail'>
              <SiRedux size={30}/> 
              <h4 className='text-light'>Experienced</h4>
            </article>
            <article className='experience__detail'>
              <SiJquery size={30}/> 
              <h4 className='text-light'>Experienced</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">

        </div>
      </div>
    </section>
  )
}

export default Experience