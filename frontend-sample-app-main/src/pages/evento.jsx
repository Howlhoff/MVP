import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState , Fragment } from 'react';
import NavBar from '../components/nav_bar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es)

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
    values.splice(index, 5);
    setInputFields(values);
  };

  const [date, setDate] = useState(new Date());

  return (
    <div className='page'>
      <NavBar />
      <h2>Crear nuevo evento</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext1">
          <Form.Label column sm="2">
            Nombre evento
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext2">
        <Form.Label column sm="2">
          Lugar
        </Form.Label>
        <Col sm="5">
          <Form.Control type="text"  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext3">
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
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext4">
        <Form.Label column sm="2">
          Necesidad
        </Form.Label>
        <Col sm="5">
          <Form.Control type="text"  />
        </Col>
      </Form.Group>
      {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group">
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Necesidad
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text"  />
                </Col>
                <Col sm ="5">
                <Button onClick={() => handleRemoveFields(index)} variant='danger'>Remover necesidad</Button>
                </Col>
              </Form.Group>
              </div>
            </Fragment>
          ))}
      </Form>
      <Button onClick={() => handleAddFields()} variant='primary'>+ Añadir necesidad</Button> 
      <br />
      <br />
      <Button variant='primary' href='/activado'>Confirmar evento </Button>
      <br />
      <br />
      <Button variant='primary' href='/'> Volver </Button>
    </div>
  )
}

export default Evento
