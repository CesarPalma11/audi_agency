import React from 'react'
import './MundoAudi.css'

const MundoAudi = () => {
  return (
    <div className='img_mundoaudi'>
        <img src='./img/Audi-web-driving.jpg' alt=''></img>

        <div className='info_mundoaudi'>  
            <h1>Audi Driving Center</h1>
            <p>El Audi Driving Experience es una actividad que se desarrolla en varios países del mundo combinando la
             pasión del manejo deportivo con las últimas tecnologías en seguridad que ofrece Audi en toda su gama de modelos.</p>
            <br></br>
            <p>A través de este curso y bajo la guía profesional de nuestros instructores, tendrás una perfecta introducción
            al mundo de la conducción dinámica y aprenderás a sobrellevar situaciones peligrosas en condiciones reales.</p>
            <br></br>
            <p>Hace 12 años que el Audi Driving Center se encuentra ubicado en el Autódromo Oscar y Juan Gálvez de la Ciudad de Buenos Aires y dentro de las experiencias que uno puede vivir en este lugar,
            se encuentran tres programas de manejo bajo el acompañamiento profesional de instructores capacitados por Audi AG.</p>
        </div>
        <div className='Audi_experience'>
            <div className='info_experience'>
            <h3>Audi Driving Experience - Nivel 1</h3>
            <p>El Audi Driving Experience es una actividad que se desarrolla en varios países del mundo combinando la pasión del manejo deportivo con las últimas tecnologías en seguridad que ofrece
            Audi en toda su gama de modelos. A través de este curso y bajo la guía profesional de nuestros instructores, tendrás una perfecta introducción al mundo de la conducción dinámica y aprenderás
            a sobrellevar situaciones peligrosas en condiciones reales.</p>
            <button>Reservar acá</button>
            </div>
            <div className='info_experience'>
                <img src='./img/Audi-driving-experience.jpg' alt=''></img>
            </div>
        </div>
        <div className='Audi_experience_left'>
          <div className='info_experience_left'>
            <img src='./img/Audi-driving-experience-2.jpg' alt=''></img>
          </div>
          <div className='info_experience_left edit_experience_left'>
            <h3>Audi Driving Experience - PLUS</h3>
            <p>A través de este programa se obtendrán los conocimientos para una conducción segura en situaciones de riesgo. Comprobaremos las virtudes de los sistemas de seguridad activos (ABS, EDV, EDS, ESP) y la tracción quattro®
               en su totalidad tanto en curvas como en superficies húmedas y maniobras de alta velocidad con trayectorias efectivas. Los participantes tendrán una perfecta introducción al mundo de la conducción dinámica y segura aprendiendo
               a sobrellevar situaciones peligrosas en condiciones reales y bajo la guía profesional de nuestros instructores. Para realizar este curso es necesario haber completado el Audi Driving Experience (Nivel 1).
            </p>
            <button>Reserva acá</button>
          </div>
        </div>
        <div className='Audi_experience_right'>
          <div className='info_experience_right'>
            <h3>Audi Driving Experience - EXTREME</h3>
            <p>En este tercer y último nivel se pondrán a prueba todos los conocimientos adquiridos en los cursos anteriores para ser aplicados directamente a una jornada solamente de pista. Los participantes 
              giraran a través de tres circuitos con distintos niveles de complejidad a bordo de la gama más deportiva y exclusiva de nuestra marca.
            </p>
            <br></br>
            <p>Para realizar este curso es necesario haber completado el Audi Driving Experience (Nivel 1) y el Audi Driving Experience Plus (Nivel 2).</p>
            <button>Reservar acá</button>
          </div>
          <div className='info_experience_right'>
            <img src='./img/Audi-driving-experience-EXTREME.jpg' alt=''></img>
          </div>
        </div>
    </div>
    
  )
}

export default MundoAudi