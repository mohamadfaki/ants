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
import whiteBeige from "../Assets/white-beige-bottoms.png";
import fireUp from "../Assets/fire-up-bottoms.png";
import flaggy from "../Assets/flaggy-bottoms.png";
import badam from "../Assets/badam-bottoms.png";
import stripped from "../Assets/stripped-bottoms.png";
import cuffed from "../Assets/cuffed-bottoms.png";
import faded from "../Assets/faded-bottoms.png";
import sweetie from "../Assets/sweetie-bottoms.png";

const Crystals = () => {
    return (
        <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Bottoms</h1>
          <div className="crystals-line"></div>
        </div>
      </div>
      <div className="top-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={whiteBeige} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">White-Beige</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={fireUp} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Fire Up</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={flaggy} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Flaggy</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={badam} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Badam</p>
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
              <img src={stripped} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Stripped</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={cuffed} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Cuffed</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={faded} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Faded</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={sweetie} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Sweetie</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      {/* <div className="bottom-crystals-content">
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
      </div> */}
    </div>
    )
}

export default Crystals;