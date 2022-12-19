import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// logo
import logo from '../../assets/logo/landing-96.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="landing page logo"/>
          <span className="logo-text">Landing Page</span>
        </div>
        <div
          className="ham-icon"
          onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-list ${showMenu ? "showMenu" : ""}`}>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
