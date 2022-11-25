import React from 'react'
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Página de Inicio</h2>
      <Button variant='primary' href='/crear'>Añadir evento</Button>
      <br />
      <br />
      <Button variant='primary' href='/mis_eventos'>Ver mis eventos</Button>
    </div>
  )
}

export default HomePage
