import React from "react";
import "../Styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeImage from "../Assets/home-img.png";
import homeOpa from "../Assets/home-opacity.png";
import crystals from "../Assets/crystal-img.png";
import clothing from "../Assets/clothing-img.png";
import jewelry from "../Assets/jewelery-img.png";
import pisces from "../Assets/pisces.png";
import saggitarius from "../Assets/saggitarius.png";
import scorpio from "../Assets/scorpio.png";
import aquarius from "../Assets/aquarius.png";
import black from "../Assets/black.png";
import heal from "../Assets/heal.png";
import story from "../Assets/story.png";
import imgHeader from "../Assets/img-header.png";
import homewhite from "../Assets/home-white.png";
import homeRuby from "../Assets/home-ruby.png";
import homeSnake from "../Assets/home-snake.png";
import homeStone from "../Assets/home-stone.png";
import decor from "../Assets/decor-img.png";
import incense from "../Assets/incense.png";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { FiPhoneCall } from 'react-icons/fi';
// import { AiFillHome } from 'react-icons/ai';

// const colors = ["red", "orange", "yellow", "green", "violet", "indigo", "blue"];

const chakras = [
  { name: "Crown Chakra", color: "#E261B7" },
  { name: "Third Eye", color: "#0085CD" },
  { name: "Throat Chakra", color: "#5BD1DD" },
  { name: "Heart Chakra", color: "#97C64E" },
  { name: "Solar Plexus", color: "#F4EE7F" },
  { name: "Sacral Eye", color: "#F4A634" },
  { name: "Root Chakra", color: "#F76F8C" },
];

const Home = () => {
  // const [hoveredColor, setHoveredColor] = React.useState(null);
  const [hoveredChakra, setHoveredChakra] = React.useState(null);
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <div className="home-img">
            <img src={HomeImage} alt="home-img" width="100%" height="500px" />
            <div id="home-image-filter"></div>
            <div className="header-content">
              <div className="header-text">
                <div className="home-text">
                  <p className="text-top">Welcome</p>
                  <p className="text-bottom">to Ants!</p>
                </div>
              </div>
              <div className="header-img">
                <img
                  src={imgHeader}
                  alt="img-header"
                  width="470px"
                  height="280px"
                />
              </div>
            </div>
          </div>
          {/* <div className="home-opa">
            <img src={homeOpa} alt="home-opa" width="100%" height="500px" />
          </div> */}
        </div>
        <div className="home-collection">
          <div className="collection-header">
            <div className="collection-text">
              <h1>Our Collection</h1>
              <div className="collection-line"></div>
            </div>
          </div>
          <div className="collection-content bar">
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/crystals">
                <div className="collection-item-img">
                  <img
                    src={crystals}
                    alt="crystals"
                    width="300px"
                    height="350px"
                  />
                </div>  
                <p className="collection-item-text">Crystals</p>
              </Link>
            </div>
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/crystals">
                <div className="collection-item-img">
                  <img
                    src={crystals}
                    alt="crystals"
                    width="300px"
                    height="350px"
                  />
                </div>
                <p className="collection-item-text">Crystals</p>
              </Link>
            </div>
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/crystals">
                <div className="collection-item-img">
                  <img
                    src={crystals}
                    alt="crystals"
                    width="300px"
                    height="350px"
                  />
                </div>
                <p className="collection-item-text">Crystals</p>
              </Link>
            </div>
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/clothing">
                <div className="collection-item-img">
                  <img
                    src={clothing}
                    alt="clothing"
                    width="300px"
                    height="350px"
                  />
                </div>
                <p className="collection-item-text">Clothing</p>
              </Link>
            </div>
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/jewelry">
                <div className="collection-item-img">
                  <img
                    src={jewelry}
                    alt="jewelry"
                    width="300px"
                    height="350px"
                  />
                </div>
                <p className="collection-item-text">Jewelry</p>
              </Link>
            </div>
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/decor">
                <div className="collection-item-img">
                  <img
                    src={decor}
                    alt="jewelry"
                    width="300px"
                    height="350px"
                  />
                </div>
                <p className="collection-item-text">Decor</p>
              </Link>
            </div>
            <div className="collection-item">
              <Link style={{ textDecoration: "none" }} to="/shop/incense">
                <div className="collection-item-img">
                  <img
                    src={incense}
                    alt="jewelry"
                    width="300px"
                    height="350px"
                  />
                </div>
                <p className="collection-item-text">Incense</p>
              </Link>
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
                <img src={homeStone} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Stone Ring</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={homeRuby} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Ruby</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={homewhite} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">White-Beije Pants</p>
              <p className="best-seller-item-price">0.00$</p>
            </div>
            <div className="best-seller-item">
              <div className="best-seller-item-img">
                <img src={homeSnake} alt="black" width="250px" height="250px" />
              </div>
              <p className="best-seller-item-text">Snake Earings</p>
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
                {/* <img src={heal} alt="root" width="430px" height="430px" /> */}
                <div>
                  <img
                    src={heal}
                    alt="ChakraImage"
                    width="430px"
                    height="430px"
                  />
                  <div className="heal-effect">
                  {chakras.map((chakra, index) => (
                    <div
                      key={index}
                      style={{
                        position: "absolute",
                        top: 67 * index,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "36px",
                        height: "36px",
                        backgroundColor: chakra.color,
                        borderRadius: "50%",
                      }}
                      onMouseEnter={() => setHoveredChakra(chakra)}
                      onMouseLeave={() => setHoveredChakra(null)}
                    />
                  ))}
                  {hoveredChakra && (
                    <p style={{ color: hoveredChakra.color }}>
                      Hovered chakra: {hoveredChakra.name}
                    </p>
                  )}
                </div>
                </div>
                {/* <div>
                  <img src={heal} alt="heal" width="430px" height="430px"/>
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        position: "absolute",
                        top: "310%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 40,
                        height: 40,
                        marginTop: 10,
                        backgroundColor: color,
                        borderRadius: "50%",
                      }}
                      onMouseEnter={() => setHoveredColor(color)}
                      onMouseLeave={() => setHoveredColor(null)}
                    />
                  ))}
                  {hoveredColor && (
                    <p style={{ color: hoveredColor }}>
                      Hovered color: {hoveredColor}
                    </p>
                  )}
                </div> */}
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
      </div>
    </div>
  );
};

export default Home;
