import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/Navbar.css';

const NavBar = () => {
    console.log('navbar')
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='nav-container'>
      <Container>
        <Navbar.Brand href="#home">Ants</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Our Shop</Nav.Link>
            <Nav.Link href="#pricing">Discover More</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;