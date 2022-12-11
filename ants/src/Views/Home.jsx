import React from "react";
import "../Styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeImage from "../Assets/home-img.png";
import crystals from "../Assets/crystals.png";
import clothing from "../Assets/clothing.png";
import jewelry from "../Assets/jewelry.png";
import pisces from "../Assets/pisces.png";
import saggitarius from "../Assets/saggitarius.png";
import scorpio from "../Assets/scorpio.png";
import aquarius from "../Assets/aquarius.png";
import black from "../Assets/black.png";
import heal from "../Assets/heal.png";
import story from "../Assets/story.png";

// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { FiPhoneCall } from 'react-icons/fi';
// import { AiFillHome } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <div className="home-img">
            <img src={HomeImage} alt="home-img" width="100%" height="500px" />
            <div id="home-image-filter"></div>
            <div className="home-text">
              <p>Welcome</p>
              <p>to Ants!</p>
            </div>
          </div>
        </div>
        <div className="home-collection">
          <div className="collection-header">
            <div className="collection-text">
              <h1>Our Collection</h1>
              <div className="collection-line"></div>
            </div>
          </div>
          <div className="collection-content">
            <div className="collection-item">
              <div className="collection-item-img">
                <img
                  src={crystals}
                  alt="crystals"
                  width="300px"
                  height="350px"
                />
              </div>
              <p className="collection-item-text">Necklaces</p>
            </div>
            <div className="collection-item1">
              <div className="collection-item-img">
                <img
                  src={clothing}
                  alt="clothing"
                  width="300px"
                  height="350px"
                />
              </div>
              <p className="collection-item-text">Clothing</p>
            </div>
            <div className="collection-item">
              <div className="collection-item-img">
                <img src={jewelry} alt="jewelry" width="300px" height="350px" />
              </div>
              <p className="collection-item-text">Jewelry</p>
            </div>
          </div>
        </div>
        <div className="home-shop">
          <div className="shop-header">
            <div className="shop-text">
              <h1>Shop By Zodiac</h1>
              <div className="shop-line"></div>
            </div>
          </div>
          <div className="shop-content">
            <div className="shop-item">
              <div className="shop-item-img">
                <img src={pisces} alt="pisces" width="200px" height="150px" />
              </div>
              <p className="shop-item-text">Pisces</p>
            </div>
            <div className="shop-item">
              <div className="shop-item-img">
                <img
                  src={saggitarius}
                  alt="saggitarius"
                  width="150px"
                  height="150px"
                />
              </div>
              <p className="shop-item-text">Saggitarius</p>
            </div>
            <div className="shop-item">
              <div className="shop-item-img">
                <img src={scorpio} alt="scorpio" width="200px" height="150px" />
              </div>
              <p className="shop-item-text">Scorpio</p>
            </div>
            <div className="shop-item">
              <div className="shop-item-img">
                <img
                  src={aquarius}
                  alt="aquarius"
                  width="200px"
                  height="150px"
                />
              </div>
              <p className="shop-item-text">Aquarius</p>
            </div>
          </div>
        </div>
        <div className="home-best-seller">
          <div className="best-seller-header">
            <div className="best-seller-text">
              <h1>Our Best Sellers</h1>
              <div className="best-seller-line"></div>
            </div>
          </div>
          <div className="best-seller-content">
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={black} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Item Name</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={black} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Item Name</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={black} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Item Name</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={black} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Item Name</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
          </div>
        </div>
        <div className="home-heal-section">
          <div className="heal-section-header">
            <div className="heal-section-text">
              <h1>How to Heal your 7 Chakras</h1>
              <div className="heal-section-line"></div>
            </div>
          </div>
          <div className="heal-section-content">
            <div className="heal-section-item">
              <div className="heal-section-item-img">
                <img src={heal} alt="root" width="430px" height="430px" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-story">
          <div className="story-header">
            <div className="story-text">
              <h1>Our Story</h1>
              <div className="story-line"></div>
            </div>
          </div>
          <div className="story-content">
            <div className="story-text">
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
                luctus luctus. Sed vitae nisl vitae nisl luctus luctus.
              </p>
            </div>
            <div className="story-img">
              <img src={story} alt="story" width="270px" height="270px" />
            </div>
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
