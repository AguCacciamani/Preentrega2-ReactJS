import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import "./NavBarComponent.css";


const NavBarComponent = () => {

  return (
    
    <Navbar expand="lg" className='navbarStyle' sticky='top'>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src="/Calis-technics-logo.png" width="80" height="80" alt='logo' className="d-inline-block align-center"/> */}
            CALI-STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='hvr-underline-from-left'>ELEMENTOS</Nav.Link>
            <Nav.Link href="#link" className='hvr-underline-from-left'>SUPLEMENTOS</Nav.Link>
            <NavDropdown title="INDUMENTARIA" id="basic-nav-dropdown" className='categories hvr-underline-from-left'>
              <NavDropdown.Item href="#action/3.1" className='categories'>HOMBRES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='categories'>
                MUJERES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='categories'>ACCESORIOS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  )
}

export default NavBarComponent