import React from 'react'
import CV from '../../assets/cv.rar'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Descarga mis CV's</a>
    <a href="#contact" className='btn btn-primary'>Escribeme</a>
    </div>
  )
}

export default CTA