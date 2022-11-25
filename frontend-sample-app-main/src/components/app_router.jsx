import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Evento from '../pages/evento'
import Activos from '../pages/mis_eventos'
import Perfil from '../pages/perfil'
import Activos2 from '../pages/anadido'
import Confirmado from '../pages/confirmado'
import Activos11 from '../pages/evento_1_1'
import Confirmado2 from '../pages/confirmado2'
import Confirmado3 from '../pages/confirmado3'

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
        <Route path='/activadaso' element={<Activos11/>} />
        <Route path='/confirmo' element={<Confirmado2/>} />
        <Route path='/confirmacion' element={<Confirmado3/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
