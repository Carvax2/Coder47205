import Container from 'react-bootstrap/Container'
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../widgets/cartWidget';

const NavBar = () => {
  return (
  <>
  <Navbar.Brand as={Link} to="/">Cloud Gaming PC</Navbar.Brand>
  <Nav.Link as={Link} to="/">Home</Nav.Link>
  <Nav.Link as={Link} to="/features">Features</Nav.Link>
  <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
  
  
  
  
  </>
  );
  }
  export default NavBar;