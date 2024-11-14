import React, { useState } from "react";
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
        <a href="/">Search</a>
        <a href="/profile">profile</a>
        <a href="/">LinkedIn</a>
        <a href="/">Contact</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};
export default Header;
