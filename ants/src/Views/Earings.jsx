import React from "react";
import "../Styles/Home.css";
import "../Styles/Crystals.css"
import { Link } from "react-router-dom";
import crystals from "../Assets/crystals.png";
import clothing from "../Assets/clothing.png";
import jewelry from "../Assets/jewelry.png";
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
import pearly from "../Assets/pearly.png";
import elephant from "../Assets/elephant.png";
import owl from "../Assets/owl.png";
import tree from "../Assets/tree.png";
import blues from "../Assets/blues.png";
import stoney from "../Assets/stoney.png";
import bohemian from "../Assets/bohemian.png";
import snowflake from "../Assets/snowflake.png";
import warrior from "../Assets/warrior.png";
import garnet from "../Assets/garnet-img.png";
import sodolite from "../Assets/sodolite-img.png";
import azurite from "../Assets/azurite-img.png";

const Crystals = () => {
    return (
        <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Earings</h1>
          <div className="crystals-line"></div>
        </div>
      </div>
      <div className="top-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={pearly} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Pearly</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={elephant} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Elephant</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={owl} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Owl</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={tree} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Tree</p>
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
              <img src={blues} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Blues</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={stoney} alt="clothing" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Stoney</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={bohemian} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Bohemian</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{textDecoration: 'none'}} to="/shop/crystals">
            <div className="collection-item-img">
              <img src={snowflake} alt="jewelry" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Snow Flake</p>
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
              <img src={warrior} alt="crystals" width="235px" height="270px" />
            </div>
            <p className="collection-item-text">Warrior</p>
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