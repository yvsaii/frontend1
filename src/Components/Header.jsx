import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigate = (path) => {
    setMenuOpen(false); // close menu after clicking
    navigate(path);
  };

  // Optional: close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo" onClick={() => handleNavigate("/home")}>
          GreenKart
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav
          ref={navRef}
          className={`nav-items ${menuOpen ? "open" : ""}`}
          style={{ maxHeight: menuOpen ? navRef.current?.scrollHeight : 0 }}
        >
          <p onClick={() => handleNavigate("/home")}>Why Green Kart</p>
          <p onClick={() => alert("Future Development!")}>Download App</p>
          <p onClick={() => handleNavigate("/aboutus")}>About Us</p>
          <p onClick={() => handleNavigate("/contact")}>Contact Us</p>
          <p>GreenKartContact@gmail.com</p>
        </nav>
      </div>
    </header>
  );
}
