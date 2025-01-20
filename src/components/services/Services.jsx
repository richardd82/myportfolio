import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Servicios que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Servidores, Redes e Infraestructura</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Diseño, implementación y mantenimiento de redes LAN/WAN.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Administración de servidores en entornos Windows y Linux.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Configuración de servidores DNS, DHCP, Mail Server y virtualización (Hyper-V, VMWare).</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Gestión de seguridad informática y ciberseguridad.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* <========== End of Networking and Infrastructure ==========> */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Software</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creación de sitios web responsivos</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Aplicaciones web con tecnologías modernas.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Desarrollo de APIs REST</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Gestión de bases de datos.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Integración de servicios de terceros como Google Maps, Cloudinary, y sistemas de pagos.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Refactorización y optimización de código existente.</p>
            </li>
          </ul>
        </article>
        {/* <========== End of Web Development ==========> */}
        <article className="service">
          <div className="service__head">
            <h3>Venta de Equipo de Cómputo y Consultorías </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Asesoría en adquisición de equipos tecnológicos.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Consultoría en migración de sistemas</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mejora de infraestructura TI.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Soporte técnico</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mantenimiento preventivo y correctivo.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Capacitación técnica para equipos de trabajo.</p>
            </li>
          </ul>
        </article>
        {/* <========== End of Computer Sales  ==========> */}
      
      </div>
    </section>
  )
}

export default Services