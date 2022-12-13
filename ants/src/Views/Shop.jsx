import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Shop.css";
import crystals from "../Assets/crystals.png";
import clothing from "../Assets/clothing.png";
import jewelry from "../Assets/jewelry.png";

const Shop = () => {
  return (
    <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Our Collection</h1>
          <div className="collection-line-shop"></div>
        </div>
        <div className="shop-subtitle">
          <p>
            Discover our unique collections of crystals, clothing, jewelry,
            décor, and incense.
          </p>
        </div>
      </div>
      <div className="top-shop-content">
        <div className="collection-content">
          <div className="collection-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crystals} alt="crystals" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Crystals</p>
            </Link>
          </div>
          <div className="collection-item1">
            <Link style={{textDecoration: 'none'}} to="/shop/clothing">
            <div className="collection-item-img">
              <img src={clothing} alt="clothing" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Clothing</p>
            </Link>
          </div>
          <div className="collection-item">
            <Link style={{textDecoration: 'none'}} to="/shop/jewelry">
            <div className="collection-item-img">
              <img src={jewelry} alt="jewelry" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Jewelry</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-shop-content">
        <div className="collection-content">
          <div className="collection-item bottom-item1">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crystals} alt="crystals" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Decor</p>
            </Link>
          </div>
          <div className="collection-item bottom-item2">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crystals} alt="crystals" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Incense</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
