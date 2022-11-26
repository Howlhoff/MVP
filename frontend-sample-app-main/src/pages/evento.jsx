import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState , Fragment } from 'react';
import NavBar from '../components/nav_bar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsTrash } from "react-icons/bs"

export const Evento = () => {
  const [inputFields, setInputFields] = useState([
    { Necesidad: '' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ Necesidad: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const [date, setDate] = useState(new Date());

  return (
    <div className='page'>
      <NavBar />
      <h2 className='text-center mt-5'>Crear nuevo evento</h2>
      <Form as={Row} className='mt-3 d-flex justify-content-center'>
        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formPlaintext1">
          <Form.Label column sm="2">
            Nombre evento
          </Form.Label>
          <Col className='d-flex justify-content-center' sm="5">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formPlaintext2">
        <Form.Label column sm="2">
          Lugar
        </Form.Label>
        <Col sm="5">
          <Form.Control type="text"  />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-center" controlId="formPlaintext3">
        <Form.Label column sm="2">
          Fecha
        </Form.Label>
        <Col sm="5">
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
        </Col>
      </Form.Group>
      {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <Form.Group className="mb-3 d-flex justify-content-center" controlId="formPlaintext3">
                <Form.Label column sm="2">
                  Necesidad
                </Form.Label>
                <Col sm="5">
                  <InputGroup controlId="formPlaintext">
                    <Form.Control
                      aria-label="Necesidad"
                      aria-describedby="basic-addon2"
                    />
                    <Button onClick={() => handleRemoveFields(index)} disabled={index === 0} variant='danger' className='btn-trash'><BsTrash /></Button>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Fragment>
          ))}
      </Form>
        <div className='mt-3 col-12 d-flex justify-content-center'>
          <Button  onClick={() => handleAddFields()} variant='primary'>+ Añadir necesidad</Button> 
        </div>
        <div className='mt-3 col-12 d-flex justify-content-center'>
          <Button variant='primary' href='/activado'>Confirmar evento </Button>
        </div>
        <div className='mt-3 col-12 d-flex justify-content-center'>
          <Button variant='primary' href='/'> Volver </Button>
        </div>
    </div>
  )
}

export default Evento
