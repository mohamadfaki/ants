import React from "react";
import "../Styles/Home.css";
import "../Styles/Crystals.css"
import { Link } from "react-router-dom";
import crystals from "../Assets/crystals.png";
import clothing from "../Assets/clothing.png";
import jewelry from "../Assets/jewelry.png";
import crystals1 from "../Assets/crystals1.png";
import crystals2 from "../Assets/crystals2.png";
import azurite from "../Assets/azurite.png";
import carnelian from "../Assets/carnelian.png";
import garnet from "../Assets/garnet.png";
import jasper from "../Assets/jasper.png";
import melechite from "../Assets/melechite.png";
import rose from "../Assets/rose.png";
import ruby from "../Assets/ruby.png";
import sunStone from "../Assets/sunStone.png";
import tigersEye from "../Assets/tigersEye.png";
import sodolite from "../Assets/sodolite.png";

const Crystals = () => {
    return (
        <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Crystals</h1>
          <div className="crystals-line"></div>
        </div>
      </div>
      <div className="top-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crystals1} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Crystals</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crystals2} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Crystals</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={ruby} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Ruby</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={jasper} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Jasper</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      <div className="middle-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={tigersEye} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Tiger's Eye</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={rose} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Rose Quartz</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={melechite} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Melechite</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={sunStone} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Sun Stone</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      <div className="bottom-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={carnelian} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Carnelian</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={garnet} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Garnet</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={sodolite} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Sodolite</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={azurite} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Azurite</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Crystals;