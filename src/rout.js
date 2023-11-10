import React from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import AllModels from './pages/AllModels';
import Content from './pages/Content';
const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allmodels' element={<AllModels />}/>
        <Route path='/content' element={<Content />}/>
        
    </Routes>
    </>
  )
}

export default Rout