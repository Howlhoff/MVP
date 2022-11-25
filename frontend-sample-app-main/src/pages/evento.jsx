import React from 'react'
import Button from 'react-bootstrap/Button';

import NavBar from '../components/nav_bar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



export const Evento = () => {

  return (
    <div className='page'>
      <NavBar />
      <h2>Crear nuevo evento</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
          <Form.Label column sm="2">
            Nombre evento
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Lugar
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Fecha
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Necesidad
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  />
        </Col>
      </Form.Group>
      </Form>
      <Button variant='primary'>Añadir necesidad</Button>
      <br />
      <br />
      <Button variant='primary' href='/activado'>Confirmar evento </Button>
      <br />
      <br />
      <Button variant='primary' href='/'>Volver </Button>
    </div>
  )
}

export default Evento
