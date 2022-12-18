import React from "react";
import "../Styles/Home.css";
import "../Styles/Crystals.css"
import { Link } from "react-router-dom";
// import crystals from "../Assets/crystals.png";
// import clothing from "../Assets/clothing.png";
// import jewelry from "../Assets/jewelry.png";
// import crystals1 from "../Assets/crystals1.png";
// import crystals2 from "../Assets/crystals2.png";
// import azurite from "../Assets/azurite.png";
// import carnelian from "../Assets/carnelian.png";
// import garnet from "../Assets/garnet.png";
// import jasper from "../Assets/jasper.png";
// import melechite from "../Assets/melechite.png";
// import rose from "../Assets/rose.png";
// import ruby from "../Assets/ruby.png";
// import sunStone from "../Assets/sunStone.png";
// import tigersEye from "../Assets/tigersEye.png";
// import sodolite from "../Assets/sodolite.png";
import carved from "../Assets/carved.png";
import chained from "../Assets/chained.png";
import waved from "../Assets/waved.png";
import swerve from "../Assets/swerve.png";
import rigid from "../Assets/rigid.png";
import fourWave from "../Assets/four-waves.png";
import skinny from "../Assets/skinny.png";
import zen from "../Assets/zen.png";
import chakras from "../Assets/chakras.png";

const Crystals = () => {
    return (
        <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Bracelets</h1>
          <div className="crystals-line"></div>
        </div>
      </div>
      <div className="top-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={carved} alt="crystals" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Carved</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={chained} alt="clothing" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Chained</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={waved} alt="jewelry" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Waved</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      <div className="middle-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={swerve} alt="jewelry" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Swerve</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={rigid} alt="crystals" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Rigid</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={fourWave} alt="clothing" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Four Wave</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      <div className="bottom-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={skinny} alt="jewelry" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Skinny</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={zen} alt="jewelry" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Zen</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="brac-item-img">
              <img src={chakras} alt="crystals" width="360px" height="270px" />
            </div>
            <p className="collection-item-text">Chakras</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Crystals;