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
        <div className="home-header">
          <div className="home-img">
            <img
              src="https://previews.123rf.com/images/andreycherkasov/andreycherkasov1703/andreycherkasov170300160/73956693-box-with-beads-plier-and-glass-hearts-to-create-hand-made-jewelry-on-old-wooden-background-handmade-.jpg"
              alt="home-img"
              width="100%"
              height="500px"
            />

            <div className="home-text">
              <p>Welcome</p>
              <p>to Ants!</p>
            </div>
          </div>
        </div>
        <div className="home-collection">
          <div className="collection-header">
              <h1>Our Collections</h1>
              <hr />
          </div>
        </div>
        {/* <Container>
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
        </Container> */}
      </div>
      {/* <Footer />  */}
    </div>
  );
};

export default Home;
