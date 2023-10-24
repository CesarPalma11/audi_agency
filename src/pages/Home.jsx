import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {VscArrowSmallRight} from 'react-icons/vsc'
import {LiaToolsSolid} from 'react-icons/lia'
import {PiTreeStructureLight} from 'react-icons/pi'
import './Home.css'


const Home = () => {

 
  useEffect(() => {
    AOS.init({duration:1500});
  }, []);
  

  return (
    <>  
      <div className='container-bn'>
        <div className='container-bn-img'></div>
        <h2 className='text_banner'>RS e-tron GT</h2>
        <button className='button_banner'>Nueva Configuracion</button>
        <button className='button_banner_02'>Solicitar asesoramiento</button>
      </div>

      <div className='container_info'>
      <div className='header_info'>
        <p>Consumo eléctrico combinado en kWh/100 km¹: 20,2-19,3 (NEDC); 22,5-20,6 (WLTP); Emisiones de CO₂ combinadas en g/km¹: 0. Las cifras de consumo eléctrico y de emisiones de CO₂ dadas en rangos dependen del equipamiento seleccionado para el vehículo.</p>

        <h1 className='text-effect' data-aos="fade-up">Pura Energia y rendimiento <br></br>progresivo</h1>
        <div className='container-video'>
        <video className='video01' autoPlay muted loop>
          <source src='./img/video01.mp4'></source>
        </video>
        </div>
      </div>
    </div>
    <div className='container_info_two'>
      <div className='header_info_two'>
      <p>Consumo eléctrico combinado en kWh/100 km¹: 20,2-19,3 (NEDC); 22,5-20,6 (WLTP); Emisiones de CO₂ combinadas en g/km¹: 0. Las cifras de consumo eléctrico y de emisiones de CO₂ dadas en rangos dependen del equipamiento seleccionado para el vehículo.</p>
      </div>
      

    </div>

    
   {/* SECTION THREE*/}


    <div className='aside-three '>
      <div className='container-info-sm' >
        <p className='parrafo-title' data-aos="fade-up">Producción</p>
        <h2 data-aos="fade-up">440<p data-aos="fade-up">kW</p></h2>
      </div>
      <span className='container-border' >
      <div className='container-info-sm info-fix'>
        <p className='parrafo-title' data-aos="fade-up">Aceleración</p>
        <h2 className='test-two' data-aos="fade-up">3.3 <p data-aos="fade-up">s</p></h2>
        <p className='last-info' data-aos="fade-up">0-100 km/h</p>
      </div>
      </span>
      
      
      <div className='container-info-sm twt' >
        <p className='parrafo-title' data-aos="fade-up">Carga de sistema</p>
        <h2 className='test' data-aos="fade-up">800<p data-aos="fade-up">volts</p></h2>
      </div>

      
    </div>
    <div className='two-icons'>
        <div className='icons-dm'>
        <PiTreeStructureLight className='icons-two' />
          <p>Dimensiones </p>
          <LiaToolsSolid className='icons-two'/>
          <p>Datos técnicos </p>
        </div>
      </div>

 {/* AUDI CONNECT PLUG & PLAY */}

    <div className='container-spects'>
      <div className='text-info'>
        <img src='./img/audi_connect.jpg' alt=''></img>
        </div>
        <div className='text-info info-mid'>
        <h2>Audi Connect Plug & Play</h2>
        <p>Transformá tu Audi en un auto conectado.
          La aplicación Audi connect plug and play (iOS / Android), junto con el Audi DataPlug permiten tener toda la información clave de tu vehículo al alcance de tu mano,
           junto con muchos beneficios, en tiempo real.</p>
           <button>Conocé más acá</button>
          </div>
    </div>
    {/* TWO IMAGES INFO */}
    <div className='container-images-two'>
      <div className='container-left'>
      
        <img src='./img/leftimg.jpg' alt=''></img>
        <h4>Red de concesionarios</h4>
        <p>Ponete en contacto con nuestra red para recibir el asesoramiento que necesitás.</p>
        <p>Encontrá tu consesionario de preferencia <VscArrowSmallRight className='arrow-p'/></p>
        
      </div>
      <div className='container-right'>
        
        <img src='./img/rightimg.jpg'alt=''></img>
        <h4>Red de servicio oficial</h4>
        <p>Encontrá el taller oficial más cercano <VscArrowSmallRight className='arrow-p'/></p>
        
      </div>
    </div>
    
    </> 
  )
}
export default Home