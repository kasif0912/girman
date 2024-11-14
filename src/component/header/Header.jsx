import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link
import "./Header.css";
import logo1 from "./Logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo1">
        <img src={logo1} alt="Logo" />
      </div>
      <div className={`list ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">Search</Link>
        <Link to="/profile">Profile</Link>   {/* Update this link */}
        <Link to="/">LinkedIn</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default Header;
