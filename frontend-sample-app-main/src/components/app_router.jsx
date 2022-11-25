import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Evento from '../pages/evento'
import Activos from '../pages/mis_eventos'
import Perfil from '../pages/perfil'
import Activos2 from '../pages/anadido'
import Confirmado from '../pages/confirmado'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/crear' element={<Evento />} />
        <Route path='/mis_eventos' element={<Activos />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/activado' element={<Activos2 />} />
        <Route path='/confirmado' element={<Confirmado/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
