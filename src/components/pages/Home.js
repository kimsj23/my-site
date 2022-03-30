import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="HomeHeader">
        <h1 className="MainTitle">Jason Kim</h1>
        <h2>Web Developer</h2>
      </header>
      <div className="HomeButtonMain">
        <Link to="/portfolio" className="HomeButton">
          Portfolio
        </Link>
        <Link to="/about" className="HomeButton">
          About Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
