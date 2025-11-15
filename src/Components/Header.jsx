import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">

      {/* TOP GREEN HEADER */}
      <div className="header1">

        <div className="sub-header1">
          <p onClick={() => navigate("/home")}>Why Green Kart</p>
          <p onClick={() => alert("Future Development!")}>Download App</p>

          <div className="icons">
            <i className="fa-brands fa-apple"></i>
            <i className="fa-brands fa-google-play"></i>
          </div>
        </div>

        <div className="sub-header2">
          <p onClick={() => navigate("/aboutus")}>About Us</p>
          <p>GreenKartContact@gmail.com</p>
          <p onClick={() => navigate("/aboutus")}>Contact Us</p>
        </div>

      </div>

      {/* MOBILE MENU TOGGLE */}
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* MOBILE DRAWER MENU */}
      {isMenuOpen && (
        <div className="mobile-menu-drawer open">
          <p onClick={() => navigate("/home")}>Why Green Kart</p>
          <p onClick={() => alert("Future Development!")}>Download App</p>
          <p onClick={() => navigate("/aboutus")}>About Us</p>
          <p>GreenKartContact@gmail.com</p>
          <p onClick={() => navigate("/contact")}>Contact Us</p>

          {/* Corrected paths */}
          <p onClick={() => navigate("/allusers")}>All Users</p>
          <p onClick={() => navigate("/topscore")}>Top Score</p>
          <p onClick={() => navigate("/")}>Login</p>
          <p onClick={() => navigate("/register")}>Register</p>

          <div className="icons-mobile">
            <i className="fa-brands fa-apple"></i>
            <i className="fa-brands fa-google-play"></i>
          </div>
        </div>
      )}
    </header>
  );
}
