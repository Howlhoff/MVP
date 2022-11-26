import React from 'react'
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import Container from 'react-bootstrap/Container';

export const Activos = () => {
  return (
    <div className='page'>
      <NavBar />
      <Container>
      <h2 className='mt-5 text-center'>Eventos Principales</h2>
      <div className='row mt-5 text-center'>
        <div className='col-8'>
            <h5>Incendio forestal</h5>
        </div>
        <div className='col-4'>
            <Button variant="primary" href='/activadaso'> Confirmar </Button>
        </div>
        
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-12' >
            <ul className='styles'>
                <li>
                    Lugar de ubicacion
                </li>
                <li className='styf'>
                    USM
                </li>
                <li>
                    Fecha
                </li>
                <li className='styf'>
                    14/06/2021
                </li>
                <li>
                    Necesidades
                </li>
                <li className='styf'>
                    Remover escombros
                </li>
                <li className='styf'>
                    Crear cortafuego
                </li>
            </ul>
        </div>
      </div>
      <div className='mt-3 col-12 d-flex justify-content-center'>
        <Button variant='primary' href='/'>Volver </Button>
      </div>
      </Container>
      
    </div>
  )
}

export default Activos
