import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Footer.css";
import Logo from "../Assets/2ants.png";
import phone from "../Assets/Group 57.png";
import email from "../Assets/Path 900.png";
import facebook from "../Assets/Group 59.png";
import instagram from "../Assets/Group 60.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col>
            <div className="footer-links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Our Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/discover">Discover More</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-logo">
              <img src={Logo} alt="Logo" id="ants-logo" />
            </div>
          </Col>
          <Col>
            <div className="footer-get-in-touch">
              <p>Get in Touch</p>
              <div className="footer-contact">
                <img src={phone} alt="phone" width="50px" height="50px"/>
                <img src={email} alt="email" width="50px" height="50px"/>
                <img src={facebook} alt="facebook" width="50px" height="50px"/>
                <img src={instagram} alt="instagram" width="50px" height="50px"/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
