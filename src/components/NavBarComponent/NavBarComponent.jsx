import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  const editStyle = {
    color: "#fff",
    fontSize: "1rem"
  }

  return (
    <Navbar expand="lg" style={{backgroundColor: "#131313"}} >
      <Container>
        <Navbar.Brand href="#home" style={{fontSize: "1.5rem", color: "#fff"}}>CALI-STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ELEMENTOS</Nav.Link>
            <Nav.Link href="#link">SUPLEMENTOS</Nav.Link>
            <NavDropdown title="INDUMENTARIA" id="basic-nav-dropdown" style={editStyle}>
              <NavDropdown.Item href="#action/3.1" style={editStyle}>HOMBRES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={editStyle}>
                MUJERES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={editStyle}>ACCESORIOS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  )
}

export default NavBarComponent