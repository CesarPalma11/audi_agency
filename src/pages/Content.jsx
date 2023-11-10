import React from 'react'
import './Content.css'
import {VscMail} from 'react-icons/vsc'
import {BsKey, BsPhone} from 'react-icons/bs'

const Content = () => {
  return (
    <header>
        <div className='img_header_content'>
            <img src='./img/header_content.png' alt=''></img>
        </div>
        <div className='header_content_two'>
            <h1>De "hace frío afuera" a "vamos  <br></br> afuera"</h1>
            <p>Preparate para la primavera con Audi Service</p>
        </div>
        <div className='header_icons'>
            <div className='icon_one'>
                <VscMail  className='icon_config'/>
                <p>Contact</p>
            </div>
            <div className='icon_two'>
                <BsKey className='icon_config'/>
                <p>myAudi login</p>
            </div>
            <div className='icon_tree'>
                <BsPhone className='icon_config'/>
                <p>Audi Service Booking</p>
            </div>
            
        </div>
        <div className='content_info'>
            <div className='content_two_info'>
                <h3>Accesorios<br></br>Originales Audi</h3>
                <p>Accesorios exclusivos que encajan a la perfección con tu Audi y que le van a aportar un carácter distintivo.</p>
                <button>Ver Accesorios</button>
            </div>
            <div className='content_two_info'>
                <img src='./img/img_right_content.jpg' alt=''></img>
            </div>
            
        </div>
        <div className='content_info_left'>
            <div className='content_info_tree'>
                <img src='./img/img_left_content.jpg' alt=''></img>
            </div>
            <div className='content_info_tree'>
                <h3>Disfrutá de tu Audi</h3>
                <p>Escapá de la rutina, nosotros nos ocupamos de los detalles. Con Audi Service vas a comenzar tu recorrido en modo relax.</p>
                <button>Audi Service Booking Online</button>
            </div>
        </div>
        <div className='three-section-imgs'>
            <div className='img-text-three section_profile'>
                <img src='./img/plan-de-mantenimiento.jpg' alt=''></img>
                <h3>Plan de Mantenimiento</h3>
                <p>Ver más</p>
            </div>
            <div className='img-text-three section'>
                <img src='./img/my-audi.jpg' alt=''></img>
                <h3>My Audi</h3>
                <p>Ver más</p>
            </div>
            <div className='img-text-three section_profile_two'>
                <img src='./img/asistencia-audi.jpg' alt=''></img>
                <h3>Asistencia Audi</h3>
                <p>Ver más</p>
            </div>
        </div>
    </header>
    
  )
}

export default Content