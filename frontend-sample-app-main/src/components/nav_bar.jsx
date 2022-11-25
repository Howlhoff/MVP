import React from 'react'
//import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Safeso</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/crear">Crear nuevo evento</Nav.Link>
            <Nav.Link href="/mis_eventos">Mis eventos</Nav.Link>
            <Nav.Link href="/perfil">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
