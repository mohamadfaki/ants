import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            {/* <Nav.Link className="nav-link" href="/shop">
              Our Shop
            </Nav.Link> */}
            <NavDropdown title="Our Shop" id="collasible-nav-dropdown" href="/shop">
              <NavDropdown.Item href="/shop/crystals">Crystals</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Clothing</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="/shop/clothing">Clothing</NavDropdown.Item> */}
              <NavDropdown title="Clothing" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/shop/clothing/tops">
                  Tops
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/clothing/bottoms">
                  Bottoms
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown.Item href="/shop/jewelery">Jewelry</NavDropdown.Item> */}
              <NavDropdown title="Jewelry" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/shop/jewelry/necklaces">
                  Necklaces
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/jewelry/bracelets">
                  Bracelets
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/jewelry/earrings">
                  Earrings
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/jewelry/rings">Rings</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="/shop/decor">Decor</NavDropdown.Item>
              <NavDropdown.Item href="/shop/incense">Incense</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link className="nav-link" href="/discover-more">
              Discover More
            </Nav.Link>
            <Nav.Link href="#">
              <img src={SearchIcon} alt="Search" className="nav-icons" />
            </Nav.Link>
            <Nav.Link href="/cart">
              <img src={CartIcon} alt="Cart" className="nav-icons" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link" href="/sign-in" id="login-nav">
              Login
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              eventKey={2}
              href="/sign-up"
              id="signup-nav"
            >
              /Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
