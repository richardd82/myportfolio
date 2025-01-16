import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food Recipes',
    github: 'https://github.com/richardd82/PI-Food-RDiaz',
    demo: 'https://food.richadd82.dev'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Alien Street',
    github: 'https://github.com/richardd82/PF-eCommerce',
    demo: 'https://alienstreet.richadd82.dev'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Trusty Tower',
    github: 'https://github.com/richardd82/trustytower',
    demo: 'https://trusty.richadd82.dev/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Weather App',
    github: 'https://github.com/richardd82/weather-app',
    demo: 'https://richadd82.github.io/weather-app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Login to Segundamano.com.mx',
    github: 'https://github.com/richardd82/login-segundamano',
    demo: 'https://segundamano.richadd82.dev/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Plan21 YvY',
    github: 'https://github.com/richardd82/plan21yvy',
    demo: 'https://plan21.richadd82.dev/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__items">
                  <div className="portfolio__items-image">
                    <img src={image} alt="Pic1" />          
                  </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='__blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>          
                    </div>
                </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
