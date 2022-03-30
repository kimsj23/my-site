import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">JK.</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="navitems">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="navitems">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/resume" className="navitems">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/about" className="navitems">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
