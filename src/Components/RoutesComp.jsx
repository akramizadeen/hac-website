import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Admission from './Pages/Admission';

function RoutesComp() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/admission' element={<Admission />} />
    </Routes>
  )
}

export default RoutesComp