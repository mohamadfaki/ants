//Home page that will include the navbar and footer
import React from "react";
import Navbar from "../Components/Navbar";
// import Footer from '../Components/Footer';
import "../Styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { FiPhoneCall } from 'react-icons/fi';
// import { AiFillHome } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <Container>
          <Row>
            <Col>
              <div className="home-text">
                <h1>Ants</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                  luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                  vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                </p>
                <Link to="/shop" className="home-btn">
                  Shop Now
                </Link>
              </div>
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Footer />  */}
    </div>
  );
};

export default Home;
