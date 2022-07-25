import React from 'react'
import './experience.css'
import {ImHtmlFive2} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMicrosoftsqlserver} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaPhp} from 'react-icons/fa'
import {SiPhpmyadmin} from 'react-icons/si'
import {SiMicrosoftonedrive} from 'react-icons/si'
import {SiApache} from 'react-icons/si'
import {SiLinux} from 'react-icons/si'
import {SiJava} from 'react-icons/si'

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
              <SiJavascript size={30} className='experience__details-icon'/> 
              <div>
                <h4 >JavaScirpt</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <ImHtmlFive2 size={30} className='experience__details-icon'/> 
              <div>
                <h4 >HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <SiCss3 size={30} className='experience__details-icon'/> 
              <div>
                <h4 >CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <SiReact size={30} className='experience__details-icon'/> 
              <div>
                <h4 >ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <SiRedux size={30} className='experience__details-icon'/> 
              <div>
                <h4 >React-Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <SiJquery size={30} className='experience__details-icon'/> 
              <div>
                <h4 >JQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsBootstrap size={30} className='experience__details-icon'/> 
              <div>
                <h4 >Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of FrontEnd */}
        <div className="experience__backend">
        <h3>Backend Development</h3>        
          <div className="experience__content">
            <article className='experience__detail'>
              <FaNode size={40} className='experience__details-icon'/> 
              <h4>Node.Js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiRedux size={30} className='experience__details-icon'/> 
              <h4>Redux</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiExpress size={30} className='experience__details-icon'/> 
              <h4>Expres.Js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiMicrosoftsqlserver size={30} className='experience__details-icon'/> 
              <h4>Ms-SQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiPostgresql size={30} className='experience__details-icon'/> 
              <h4>PostgreSQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiMysql size={30} className='experience__details-icon'/> 
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiPhpmyadmin size={30} className='experience__details-icon'/> 
              <h4>PhpMyAdmin</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <FaPhp size={30} className='experience__details-icon'/> 
              <h4>PHP</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiMicrosoftonedrive size={30} className='experience__details-icon'/> 
              <h4>Microsoft IIS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiApache size={30} className='experience__details-icon'/> 
              <h4>Apache</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
              <SiLinux size={30} className='experience__details-icon'/> 
              <h4>Linux</h4>
            </article>
            <article className='experience__detail'>
              <SiJava size={30} className='experience__details-icon'/> 
              <h4>Java</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience