import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo-transparent.png";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RxCross1 className="navbar-hamburger-icon" />
          ) : (
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Education", path: "/Education" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={name} className="navbar-item">
              <Link to={path} className="navbar-link" onClick={handleNavClick}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
