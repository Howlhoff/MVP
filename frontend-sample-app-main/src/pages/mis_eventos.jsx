import React from 'react'
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Activos = () => {
  return (
    <div className='page'>
      <NavBar />
      <Container>
      <h2>Página Interna</h2>
        <Row md={6}>
            <Col> <h5>Incendio forestal</h5>  </Col>
            <Col><Button variant="primary"> Confirmar </Button></Col>
        </Row>
        <Row>
            <Col xs={4}>Lugar de ubicacion</Col>
        </Row>
        <Row>
            <Col>- USM</Col>
        </Row>
        <Row>
            <Col xs={1}>Fecha</Col>
        </Row>
        <Row>
            <Col xs={6}>- 14/06/2021</Col>
        </Row>
        <Row>
            <Col xs={1}>Necesidades</Col>
        </Row>
        <Row>
            <Col xs={6}>- Remover escombros</Col>
        </Row>
        <Row>
            <Col xs={6}>- Crear cortafuego</Col>
        </Row>
        <Row>
            <Col><Button variant='primary' href='/'>Volver </Button></Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Activos
