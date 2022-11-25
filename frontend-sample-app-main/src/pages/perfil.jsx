import React from 'react'

import Button from 'react-bootstrap/Button'
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const Perfil = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Aqui va un perfil</h2>
      Aqui no hay nada, no insista
      <br />
      <Button variant='primary' href='/'>Volver </Button>
    </div>
  )
}

export default Perfil