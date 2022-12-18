import React from "react";
import "../Styles/Home.css";
import "../Styles/Clothing.css"
import { Link } from "react-router-dom";
import crystals from "../Assets/crystals.png";
import clothing from "../Assets/clothing.png";
import jewelry from "../Assets/jewelry.png";
import tops from "../Assets/tops-img.png";
import bottoms from "../Assets/bottoms-img.png";

const Clothing = () => {
  return (
    <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Clothing</h1>
          <div className="clothing-line"></div>
        </div>
        <div className="shop-subtitle">
          <p>
            Discover our unique collections of crystals, clothing, jewelry,
            décor, and incense.
          </p>
        </div>
      </div>
      <div className="bottom-shop-content">
        <div className="collection-content">
          <div className="collection-item bottom-item1">
            <Link style={{textDecoration: 'none'}} to="/shop/clothing/tops">
            <div className="collection-item-img">
              <img src={tops} alt="crystals" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Tops</p>
            </Link>
          </div>
          <div className="collection-item bottom-item2">
            <Link style={{textDecoration: 'none'}} to="/shop/clothing/bottoms">
            <div className="collection-item-img">
              <img src={bottoms} alt="crystals" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Bottoms</p>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="collection-content">
        <div className="collection-item">
          <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crystals} alt="crystals" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Tops</p>
          </Link>
        </div>
        <div className="collection-item1">
          <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={clothing} alt="clothing" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Bottoms</p>
          </Link>
        </div>
        <div className="collection-item">
          <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={jewelry} alt="jewelry" width="300px" height="350px" />
            </div>
            <p className="collection-item-text">Bags</p>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Clothing;
