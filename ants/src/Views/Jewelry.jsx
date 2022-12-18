import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import crystals from "../Assets/crystals.png";
import clothing from "../Assets/clothing.png";
import jewelry from "../Assets/jewelry.png";
import necklaces from "../Assets/necklaces-img.png";
import bracelets from "../Assets/bracelets-img.png";
import rings from "../Assets/rings-img.png";
import earrings from "../Assets/earrings-img.png";

const Jewelry = () => {
  return (
    <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Jewelry</h1>
          <div className="clothing-line"></div>
        </div>
        <div className="shop-subtitle">
          <p>
            Dare to be different with our special collections of rings,
            earrings, necklaces, and bracelets.
          </p>
        </div>
      </div>
      <div className="top-shop-content">
        <div className="collection-content">
          <div className="collection-item bottom-item1">
            <Link style={{textDecoration: 'none'}} to="/shop/jewelery/rings">
              <div className="collection-item-img">
                <img
                  src={rings}
                  alt="crystals"
                  width="300px"
                  height="350px"
                />
              </div>
              <p className="collection-item-text">Rings</p>
            </Link>
          </div>
          <div className="collection-item bottom-item2">
            <Link style={{textDecoration: 'none'}} to="/shop/jewelery/earings">
              <div className="collection-item-img">
                <img src={earrings} alt="jewelry" width="300px" height="350px" />
              </div>
              <p className="collection-item-text">Earrings</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-shop-content">
        <div className="collection-content">
          <div className="collection-item bottom-item1">
            <Link style={{textDecoration: 'none'}} to="/shop/jewelery/necklaces">
              <div className="collection-item-img">
                <img
                  src={necklaces}
                  alt="crystals"
                  width="300px"
                  height="350px"
                />
              </div>
              <p className="collection-item-text">Necklaces</p>
            </Link>
          </div>
          <div className="collection-item bottom-item2">
            <Link style={{textDecoration: 'none'}} to="/shop/jewelery/bracelets">
              <div className="collection-item-img">
                <img
                  src={bracelets}
                  alt="crystals"
                  width="300px"
                  height="350px"
                />
              </div>
              <p className="collection-item-text">Bracelets</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
