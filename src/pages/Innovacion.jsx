import React from 'react'
import './Innovacion.css'

const Innovacion = () => {
  return (
    <div>
        <img src='./img/retry.png' alt=''></img>

        <div className='info_header'>
            <h1>Eléctricos. Entre otras cosas<br></br> maravillosas</h1>
            <p>Manejar sin generar emisiones es maravilloso. Viajar sin sentir vibraciones y en completo silencio es una sensación increíble. Y poder acceder a ventajas exclusivas es algo fantástico. Pero todo eso es solo el principio en los Audi 100% eléctricos.
             Porque nuestros modelos eléctricos te ofrecen una experiencia inmersiva en la que cada detalle y cada innovación te provocan una sensación diferente. Porque lo maravilloso es hacer de cada viaje algo único.
            </p>
        </div>
        <img src='./img/stage-e-tron.jpg' alt=''></img>
        <div className='info_header_two'>
            <h1>RS e-tron GT: 100% Eléctrico 100% Electrizante</h1>
            <p>Nunca antes habíamos creado un auto tan electrizante como el Audi RS e-tron GT. Con un modo boost que aumenta
                 la potencia hasta los 475 kW (646 CV) y una carga rápida que convierte las paradas en pit stops.
            </p>
        </div>
        {/* THREE IMGS*/}
        <div className='three-section-imgs'>
            <div className='img-text-three section_profile'>
                <img src='./img/e-tron.jpg' alt=''></img>
                <h3>e-tron</h3>
                <p>Ver</p>
            </div>
            <div className='img-text-three section'>
                <img src='./img/Sportback.jpg' alt=''></img>
                <h3>e-tron Sportback</h3>
                <p>Ver</p>
            </div>
            <div className='img-text-three section_profile_two'>
                <img src='./img/RS e-tron GT.jpg' alt=''></img>
                <h3>RS e-tron GT</h3>
                <p>Ver</p>
            </div>
        </div>

        <div className='info_withe'>
            <h3>Descubrí nuestros eléctricos del futuro</h3>
            <p>Hoy ya tenemos 3 vehículos 100% eléctricos que podés manejar. Pero nuestro camino hacia el progreso no se detiene y seguimos imaginando posibilidades para la movilidad del futuro a través de nuestros concept cars:
                 vehículos innovadores con conducción autónoma que ofrecerán un nuevo universo de experiencias.
            </p>
        </div>

        <div className='audi_config'>
            <div className='two-imgs'>
                <img src='./img/audi-rs-e-tron-gt.jpg' alt=''></img>
            </div>
            <div className='two-imgs'>
                <h1>Crea tu propio Audi 100% eléctrico</h1>
                <p>Eligí tu eléctrico favorito y personalizalo como quieras con nuestro configurador.</p>
                <button>Configurar</button>
            </div>
        </div>
        <div className='letters'>
            <p>* La autonomía de los vehículos puede variar por factores externos, incidiendo en esta el perfil de la ruta, la temperatura, 
                el tipo de neumáticos o el estilo de conducción del usuario. Los tiempos de carga pueden variar en función de las condiciones 
                ambientales y de la instalación de carga disponible.
            </p>
            <br></br>
            <p>** El Audi skysphere concept, el Audi grandsphere concept y el Audi urbansphere concept son prototipos no disponibles para la comercialización.</p>
        </div>
    </div>
  )
}

export default Innovacion