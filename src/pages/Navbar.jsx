import React from 'react'
import './Navbar.css'
import {Link } from 'react-router-dom'
import {GrSearch} from 'react-icons/gr'
const Navbar = () => {
  return (
    <>
    <header>
      <div className='navbar'>
        <div className='container'>
         <Link to={'/'}> <img src='./img/logo.jpg' alt='' ></img></Link>
          <ul>
            <li><Link to='/allmodels' className='link'>Todos los modelos</Link></li>
            <li><Link to='/content' className='link'>Servicios y Accesorios</Link></li>
            <li><Link to='/' className='link'>Mundo Audi</Link></li>
            <li><Link to='/' className='link'>Innovacion</Link></li>
          </ul>
          <GrSearch className='search_icon'/>
        </div>
      </div>
    </header>
    </>
    
  )
}

export default Navbar