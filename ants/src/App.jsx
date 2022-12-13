import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Shop from "./Views/Shop";
import ContactUs from "./Views/ContactUs";
import DiscoverMore from "./Views/DiscoverMore";
import SignUp from "./Views/SignUp";
import SignIn from "./Views/SignIn";
import Clothing from "./Views/Clothing";
import Jewelry from "./Views/Jewelry";
import Crystals from "./Views/Crystals";
// const App = () => {
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/discover-more" element={<DiscoverMore />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/shop/clothing" element={<Clothing />} />
          <Route path="/shop/jewelry" element={<Jewelry />} />
          <Route path="/shop/crystals" element={<Crystals />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

// export default App;
