import React from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import AllModels from './pages/AllModels';
import Content from './pages/Content';
import MundoAudi from './pages/MundoAudi';
import Innovacion from './pages/Innovacion';
const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allmodels' element={<AllModels />}/>
        <Route path='/content' element={<Content />}/>
        <Route path='/mundoaudi' element={<MundoAudi />}/>
        <Route path='/innovacion' element={<Innovacion />}/>
        
    </Routes>
    </>
  )
}

export default Rout