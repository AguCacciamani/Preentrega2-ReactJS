import React from 'react'

import { Link } from 'react-router-dom';
import { getMensShirts, getMensShoes, getSportAccessories, getWomensDresses, getWomensShoes } from '../../services/productsServices';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import "./NavBarComponent.css";


const NavBarComponent = () => {

  const [categories, setCategories] = React.useState([]);

  const myCategories = [
    { name: 'Remeras Hombres', category: 'mens-shirts' },
    { name: 'Zapatos Hombres', category: 'mens-shoes' },
    { name: 'Accesorios Deportivos', category: 'sports-accessories' },
    { name: 'Vestidos de Mujer', category: 'womens-dresses' },
    { name: 'Zapatos de Mujer', category: 'womens-shoes' },
  ];

  return (

    <Navbar expand="lg" className='navbarStyle' sticky='top'>
      <Container>
        <Link className='navbar-brand' to="/">
          CALI-STORE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='hvr-underline-from-left nav-link'>INICIO</Link>
            <Nav.Link className='hvr-underline-from-left'>CONTACTO</Nav.Link>
            <NavDropdown className='hvr-underline-from-left' title="CATEGORIAS" id="basic-nav-dropdown">
              {myCategories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${category.category}`}>{category.name}</Link>
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