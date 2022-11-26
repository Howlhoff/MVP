import React from 'react'
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const Confirmado3 = () => {
  return (
    <div className='page'>
      <NavBar />
      <Container>
      <h2 className='mt-5 text-center'>Eventos Principales</h2>
      <div className='row mt-5 text-center'>
        <div className='col-8'>
            <h5>Tsunami</h5>
        </div>
        <div className='col-4'>
            <Button variant="primary" href='/confirmo'> Confirmar </Button>
        </div>
        
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-12' >
            <ul className='styles'>
                <li>
                    Lugar de ubicacion
                </li>
                <li className='styf'>
                    Lebu
                </li>
                <li>
                    Fecha
                </li>
                <li className='styf'>
                    8/11/2022
                </li>
                <li>
                    Necesidades
                </li>
                <li className='styf'>
                    Remover escombros
                </li>
                <li className='styf'>
                    Ropa
                </li>
                <li className='styf'>
                    Comida no perecible
                </li>
            </ul>
        </div>
      </div>
      <div className='row mt-5 text-center'>
        <div className='col-8'>
            <h5>Incendio forestal</h5>
        </div>
        <div className='col-4'>
            <Button variant="secondary" disabled> Confirmado </Button>
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
                <Form>
                    <Form.Check label="Remover escombros"/>
                    <Form.Check label="Crear cortafuegos"/>
                </Form>
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

export default Confirmado3