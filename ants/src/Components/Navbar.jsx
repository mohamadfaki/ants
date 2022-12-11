import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/logo.png";
import SearchIcon from "../Assets/search-icon.png";
import CartIcon from "../Assets/cart-icon.png";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Styles/Navbar.css";

const NavBar = () => {
  console.log("navbar");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="nav-container"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" id="ants-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link" href="/shop">Our Shop</Nav.Link>
            <Nav.Link className="nav-link" href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link className="nav-link" href="/discover-more">Discover More</Nav.Link>
            <Nav.Link href="#">
              <img src={SearchIcon} alt="Search" className="nav-icons" />
            </Nav.Link>
            <Nav.Link href="/cart">
              <img src={CartIcon} alt="Cart" className="nav-icons" />
            </Nav.Link>

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
            <Nav.Link className="nav-link" href="/sign-in" id="login-nav">
              Login
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey={2} href="/sign-up" id="signup-nav">
              /Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
