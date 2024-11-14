import React from "react";
import "./Home.css";
import logo2 from "./coloured v1 white.jpg"; 
import "font-awesome/css/font-awesome.min.css"; 
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <img src={logo2} alt="logo" className="logo2" />
        <div className="search-container">
          <i className="fa fa-search input-logo"></i>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </div>
    </>
  );
};

export default Home;
