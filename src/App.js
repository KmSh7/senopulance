import "./App.css";
import titleImage from "./components/pictures/senopulance.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import React, { useState } from "react";
import srchimg from "./components/pictures/srch5.png";
import logo from "./components/pictures/logo.png"
function App() {
  const fontfamily = {
    fontFamily: "Darker Grotesque",
    fontWeight: "800",
    color: "#555454",
  };
  const srchicon = {
    height: "30px",
    width: "30px",
    marginTop: "7px",
  };

  const [search, setSearch] = useState("");

  function scrClick() {
    var x = document.getElementById("srcBox").classList;
    x.toggle("searchbox");
    var y = document.getElementById("srcbarin").classList;
    y.toggle("srcbarin1");
    var z = document.getElementById("x").classList.toggle("x1");
    document.getElementById("b1").classList.toggle("bit");
    document.getElementById("b2").classList.toggle("bit");
    document.getElementById("b3").classList.toggle("bit");
    document.getElementById("b4").classList.toggle("bit");
  }
  function displayStop() {
    var x = document.getElementById("srcBox").classList;
    x.remove("searchbox");
    var y = document.getElementById("srcbarin").classList;
    y.remove("srcbarin1");
    var z = document.getElementById("x").classList.remove("x1");
    document.getElementById("b1").classList.remove("bit");
    document.getElementById("b2").classList.remove("bit");
    document.getElementById("b3").classList.remove("bit");
    document.getElementById("b4").classList.remove("bit");
  }

  return (
    <div style={fontfamily} id="test" className="app-flex-container">
      <div id="b1" className="app-flex-item offer-bar">
        BIG <span style={{ fontSize: "30px", fontWeight: "500" }}>SALE</span>{" "}
        ENERGY - up to{" "}
        <span style={{ fontSize: "30px", fontWeight: "500" }}>70%</span>{" "}
        DISCOUNT
      </div>
      <div className="app-flex-item title">
       <span className="title-logo"> <img
          src={titleImage}
          alt="senOpulance"
          id="b2"
          className="titleImage"
        ></img>
        <img src={logo} className="logo" height={"50px"} width={"90px"}></img>
        </span>
        <span style={{ paddingRight: "5vw" }} className="title-item">
          <input
            type="search"
            className="searchbar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <label id="b3" className="srcicon">
            <img style={srchicon} src={srchimg} onClick={scrClick}></img>
          </label>{" "}
          <span className="x" id="x" onClick={displayStop}>
            x
          </span>
          <span id="srcBox">
            <input id="srcbarin" className="srcbarin" type="text"></input>
          </span>
        </span>
      </div>
      <div id="b4" className="app-flex-item routing">
        <Router>
          <nav>
            <Link to="/" className="app-nav-onlyforhome">
              Home
            </Link>
            <Link to="/About" className="app-nav">
              About
            </Link>
            <Link to="/Help" className="app-nav">
              Help
            </Link>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Help" element={<Help />}></Route>
            </Routes>
          </main>
        </Router>
      </div>
      <footer className="app-flex-item footer">
        <a href="https://www.instagram.com/senopulence/" target="_blank">
          <div className="icon instagram"></div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100083640364268"
          target="_blank"
        >
          <div className="icon facebook"></div>
        </a>
        <a href="https://www.pinterest.com/senopulence/" target="_blank">
          <div className="icon printerest"></div>
        </a>
      </footer>
    </div>
  );
}

export default App;
