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

  React.useEffect(() => {
  const fetchCategories = async () => {
    try {
      const [mensShirts, mensShoes, sportAccessories, womensDresses, womensShoes] = await Promise.all([
        getMensShirts(),
        getMensShoes(),
        getSportAccessories(),
        getWomensDresses(),
        getWomensShoes(),
      ]);

      setCategories([
        { name: 'Mens Shirts', data: mensShirts.data.products },
        { name: 'Mens Shoes', data: mensShoes.data.products },
        { name: 'Sport Accessories', data: sportAccessories.data.products },
        { name: 'Womens Dresses', data: womensDresses.data.products },
        { name: 'Womens Shoes', data: womensShoes.data.products },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategories();
}, []);
  return (
    
    <Navbar expand="lg" className='navbarStyle' sticky='top'>
      <Container>
        <Link className='navbar-brand' to="/">
          {/* <img src="/Calis-technics-logo.png" width="80" height="80" alt='logo' className="d-inline-block align-center"/> */}
            CALI-STORE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='hvr-underline-from-left nav-link'>INICIO</Link>
            <Nav.Link className='hvr-underline-from-left'>CONTACTO</Nav.Link>
            <NavDropdown className='hvr-underline-from-left' title="CATEGORIAS" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}>{category.name}</Link>
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