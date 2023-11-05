import React, { useState } from 'react'
import './Navbar.css'
import {Link } from 'react-router-dom'
import {GrSearch} from 'react-icons/gr'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'


function Navbar () {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)

  }
  return (
    <>
    
    <NavContainer>
    <header className='bg-header'>
      <div className='navbar'>
        <div className='container'>
        <Link to={'/'}> <img src='./img/logo.jpg' alt='' ></img></Link>
         <div className={`links ${clicked ? 'active' : ''}`}>
         <ul>
           <li><Link to='/allmodels' onClick={handleClick}>Todos los modelos</Link></li>
            <li><Link to='/content' onClick={handleClick}>Servicios y Accesorios</Link></li>
            <li><Link to='/' onClick={handleClick}>Mundo Audi</Link></li>
            <li><Link to='/' onClick={handleClick}>Innovacion</Link></li>
          </ul>
          <GrSearch className='search_icon'/>
          </div>
        </div>
      </div>
    </header>
    <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
    </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer>
    </>
  )
}
export default Navbar

const NavContainer = styled.nav`
  h2{
    z-index: 1;
    color: #000;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  z-index: 1;
  padding: .4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    z-index: 2;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #000;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #000;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 2rem;
      color: #000;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #fff;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
