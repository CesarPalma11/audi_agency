import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {BiLogoFacebook, BiLogoYoutube, BiLogoTwitter, BiLogoInstagram} from 'react-icons/bi'
import {VscArrowSmallUp} from 'react-icons/vsc'

const Footer = () => {
  return (
    <>
    <div className='container-footer'>
      
        <div className='btn-up'>
        <Link to="/" className='link-btn-up'>
            <p>Volver arriba <VscArrowSmallUp className='arrow-up'/></p>
            </Link>
        </div>
        <div className='info-container-footer'>
          <div className='section-footer'>
              <h4>Modelos</h4>
              <p>Todos los modelos</p>
              <p>Sportback</p>
              <p>e-tron</p>
              <p>Sedán</p>
              <p>Coupé</p>
              <p>Sport</p>
          </div>
          <div className='section-footer'>
            <h4>Servicios y Accesorios</h4>
            <p>Servicios al cliente</p>
            <p>Asistencia Audi</p>
            <p>Red de Servicio Oficial</p>
            <p>Consultas Recall</p>
            <p>Audi Connect Plug&Play</p>
            <p>Eficiencia energetica</p>
            <p>Audi Cover</p>
          </div>
          <div className='section-footer'>
            <h4>Mundo Audi</h4>
            <p>Audi Lounge</p>
            <p>Audi Driving Center</p>
          </div>
          <div className='section-footer'>
            <h4>Innovación</h4>
            <p>E-movilidad</p>
            <p>Tecnologia</p>
            <p>Audi Sport</p>
          </div>
          <div className='section-footer'>
            <h4>Compañia</h4>
            <p>Ventas Especiales</p>
            <p>Contacto</p>
            <p>Historia</p>
            <p>Audi Informa</p>
          </div>
          <div className='section-footer section-footer-end'>
            <h4>Concesionarios</h4>
            <p>Nuestros servicios</p>
            <p>Promesas de servicio</p>
            <p>Red de Concesionarios</p>
          </div>
        </div>
        <div className='line-footer'>
        <BiLogoFacebook className='icons-footer' />
        <BiLogoYoutube className='icons-footer' />
        <BiLogoTwitter className='icons-footer' />
        <BiLogoInstagram className='icons-footer' />
        </div>
        <div className='p-footer'>
        <p className='division-footer'>© 2023 Audi división de Volkswagen</p>
        </div>
    </div>
    </>
  )
}

export default Footer