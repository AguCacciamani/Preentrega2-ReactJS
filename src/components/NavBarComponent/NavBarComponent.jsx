import React from 'react'
import { Link } from 'react-router-dom';

import { useCollectionItems } from '../../hooks/useCollectionItems';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import "./NavBarComponent.css";


const NavBarComponent = () => {

  const {items} = useCollectionItems("categories");

  return (

    <Navbar expand="lg" className='navbarStyle' sticky='top'>
      <Container>
        <Link to="/" className='navbar-brand' >
          CALI-STORE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='hvr-underline-from-left nav-link'>INICIO</Link>
            <Nav.Link className='hvr-underline-from-left'>CONTACTO</Nav.Link>
            <NavDropdown className='hvr-underline-from-left' title="CATEGORIAS" id="basic-nav-dropdown">
              {items.map((categories) => {
                return (
                  <NavDropdown.Item key={categories.slug}>
                    <Link to={`/category/${categories.slug}`}>{categories.name}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  )
}

export default NavBarComponent