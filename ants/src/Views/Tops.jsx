import React from "react";
import "../Styles/Home.css";
import "../Styles/Crystals.css";
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
import blue from "../Assets/blue-tops.png";
import trip from "../Assets/trip-tops.png";
import bohemian from "../Assets/bohemian-tops.png";
import patterned from "../Assets/patterned-tops.png";
import patterned2 from "../Assets/patterned2-tops.png";
import purple from "../Assets/purple-tops.png";
import gandhi from "../Assets/gandhi-tops.png";
import elephant from "../Assets/elephant-tops.png";

const Crystals = () => {
  return (
    <div className="home-collection">
      <div className="collection-header">
        <div className="collection-text">
          <h1>Tops</h1>
          <div className="crystals-line"></div>
        </div>
      </div>
      <div className="top-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={blue}
                  alt="crystals"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Blue</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={trip}
                  alt="clothing"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Trip</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img src={bohemian} alt="jewelry" width="235px" height="270px" />
              </div>
              <p className="collection-item-text">Bohemian</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img src={patterned} alt="jewelry" width="235px" height="270px" />
              </div>
              <p className="collection-item-text">Patterned</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      <div className="middle-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={patterned2}
                  alt="crystals"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Patterned 2</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img src={purple} alt="clothing" width="235px" height="270px" />
              </div>
              <p className="collection-item-text">Purple</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={gandhi}
                  alt="jewelry"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Gandhi</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={elephant}
                  alt="jewelry"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Elephant</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
        </div>
      </div>
      {/* <div className="bottom-crystals-content">
        <div className="collection-content">
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={carnelian}
                  alt="crystals"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Carnelian</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img src={garnet} alt="clothing" width="235px" height="270px" />
              </div>
              <p className="collection-item-text">Garnet</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
              <div className="collection-item-img">
                <img
                  src={sodolite}
                  alt="jewelry"
                  width="235px"
                  height="270px"
                />
              </div>
              <p className="collection-item-text">Sodolite</p>
            </Link>
            <p className="price">0.00$</p>
          </div>
          <div className="crystals-item">
            <Link style={{ textDecoration: "none" }} to="/shop/crystals">
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
  );
};

export default Crystals;
