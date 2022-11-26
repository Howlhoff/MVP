import React from 'react'
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'


export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2 className='mt-5 text-center'>Página de Inicio</h2>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <Button variant='primary' href='/crear' className='mt-5'>Añadir evento</Button>
        </div>
        <div className='col-12 d-flex justify-content-center'>
          <Button variant='primary' href='/mis_eventos' className='mt-5'>Ver mis eventos</Button>
        </div>
        
      </div>
      
      <br />
      <br />
    </div>
  )
}

export default HomePage
