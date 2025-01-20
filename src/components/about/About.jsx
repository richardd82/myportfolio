import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineCloudServer} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme</h5>
      <h2>Acerca de mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon' size={40}/>
              <h5>Experiencia</h5>
              <small>26+ años</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' size={40}/>
              <h5>Clientes</h5>
              <small>30+ Nacionales y Extranjeros</small>
            </article>
            <article className="about__card">
              <AiOutlineCloudServer className='about__icon' size={40}/>
              <h5>Proyectos</h5>
              <small>100+ realizados</small>
            </article>
          </div>

          <p>
          Soy Ricardo Andrés Díaz Bautista, Ingeniero en Sistemas Computacionales con una sólida experiencia en tecnología de la información. Me especializo como Fullstack Developer y consultor IT, combinando habilidades técnicas avanzadas en desarrollo web, infraestructura, redes y gestión de proyectos tecnológicos. Mi enfoque profesional se centra en la resolución de problemas, la innovación tecnológica y el cumplimiento de objetivos. Disfruto trabajar en equipo, liderar proyectos desafiantes y mantenerme actualizado con las últimas tendencias tecnológicas. Con un compromiso hacia la excelencia, ofrezco soluciones a medida que maximizan la eficiencia y la productividad de mis clientes.
          </p>

          <a href="#contact" className='btn btn-primary'>Escribeme</a>
        </div>
      </div>
    </section>
  )
}

export default About