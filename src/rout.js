import React from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import AllModels from './pages/AllModels';
const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allmodels' element={<AllModels />}/>
        
    </Routes>
    </>
  )
}

export default Rout