import React, { useEffect, useState } from "react";
import diaa from "../image/profile.jpg";
import logo from "../images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <header>
      <nav className="nav">
        <a href="/">
          <img className="logo" src={logo} alt="home page" />
        </a>

        <div
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className={`nav__link ${isNavExpanded ? "show" : "hide"}`}>
          <a className="na" href="/services">
            Services
          </a>
          <a className="na" href="/about">
            About Us
          </a>
          <a className="na" href="/FAQs">
            FAQs
          </a>
        </div>

        {isAuthenticated && (
          <a href="/setting">
            <img className="puser" src={diaa} alt="Icon" />
          </a>
        )}
      </nav>
    </header>
  );
}
