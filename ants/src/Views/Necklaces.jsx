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
import crossed from "../Assets/crossed.png";
import scorpion from "../Assets/scorpion.png";
import flake from "../Assets/flake.png";
import moon from "../Assets/moon.png";
import chakras from "../Assets/chakras-neck.png";
import orange from "../Assets/orange.png";
import turquoise from "../Assets/turquoise.png";
import brown from "../Assets/brown.png";
import kaff from "../Assets/kaff.png";
import anarchy from "../Assets/anarchy.png";
import zen from "../Assets/zen-neck.png";
import black from "../Assets/black-neck.png";

const Crystals = () => {
    return (
        <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Necklaces</h1>
          <div className="crystals-line"></div>
        </div>
      </div>
      <div className="top-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={crossed} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Crossed</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={scorpion} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Scorpion</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={flake} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Flake</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={moon} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Moon</p>
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
              <img src={chakras} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Chakras</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={orange} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Orange</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={turquoise} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Turquoise</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={brown} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Brown</p>
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
              <img src={kaff} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Kaff</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={anarchy} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Anarchy</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={zen} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Zen</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={black} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Black</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Crystals;