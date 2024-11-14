import React, { useState } from "react";
import logo1 from "../component/header/Logo.jpg";
import "./profile.css";
import Card from "./Card";

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar1">
        <div className="logo1">
          <img src={logo1} alt="Logo" />
        </div>
        <div className="search-container1">
          <i className="fa fa-search input-logo"></i>
          <input
            type="text"
            className="search-input1"
            placeholder="Search..."
          />
        </div>
        <div className={`list ${isMenuOpen ? "active" : ""}`}>
          <a href="/">Search</a>
          <a href="/">Website</a>
          <a href="/">LinkedIn</a>
          <a href="/">Contact</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className="container">
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
};

export default Profile;
