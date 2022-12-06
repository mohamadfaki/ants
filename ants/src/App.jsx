import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/Home";
import { Route, Routes } from "react-router-dom";
// import Footer from "./Components/Footer";
// const App = () => {
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    );
    // };
  }
}

// export default App;
