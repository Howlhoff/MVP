import React from 'react'

import Button from 'react-bootstrap/Button'
import NavBar from '../components/nav_bar'

export const Perfil = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2 className='mt-5 text-center'>Aqui va un perfil</h2>
      <div className='mt-5 text-center'>
        Aqui no hay nada, no insista
      </div>
      <div className='mt-3 col-12 d-flex justify-content-center'>
        <Button variant='primary' href='/'>Volver </Button>
      </div>
    </div>
  )
}

export default Perfil