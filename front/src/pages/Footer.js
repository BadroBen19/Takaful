import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import tiktok from "../images/tiktok.png";

export default function Footer() {
  return (
    <footer>
      <div className="containerfooter">
        <div className="part1">
          <div className="logoinfo">
            <a href="homepage.html">
              <img className="logof" src={logo} alt="Logo" />
            </a>
            <p className="hadra">
              is dedicated to providing you with funds for whatever cause you
              need,
              <br />
              and also making donations to those in need.
            </p>
          </div>
          <div className="fory">
            <p className="fy">For You</p>
            <a  className="hadra" href="http://">
              donate now
            </a>
            <a className="hadra" href="http://">
              receive donations
            </a>
          </div>
          <div className="reseaux">
            <a href="facebook.com">
              <img className="f" src={facebook} alt="Facebook" />
            </a>
            <a href="instagram.com">
              <img className="f" src={instagram} alt="Instagram" />
            </a>
            <a href="youtube.com">
              <img className="f" src={youtube} alt="YouTube" />
            </a>
            <a href="tiktok.com">
              <img className="f" src={tiktok} alt="TikTok" />
            </a>
          </div>
        </div>
        <hr />
        <p className="r">Reasons to Donate</p>
        <div className="reas">
          <div className="reas1">
            <a className="hadra" href="http://">
              Disease research and treatment
            </a>
            <a className="hadra" href="http://">
              Supporting victims of natural disasters
            </a>
          </div>
          <div className="reas2">
            <a className="hadra" href="http://">
              Providing education for underprivileged groups
            </a>
            <a className="hadra" href="http://">
              Other causes
            </a>
          </div>
          <div className="reas3">
            <a className="hadra" href="http://">
              Providing aid to the impoverished
            </a>
            <a className="hadra" href="http://">
              Funding scientific research
            </a>
          </div>
          <div className="reas4">
            <a className="hadra" href="http://">
            Backing programs for needy kids
            </a>
            <a className="hadra" href="http://">
              supporting the victims of occupation in Palestine
            </a>
          </div>
        </div>
        <hr />
        <p className="we">We love our users!</p>
      </div>
    </footer>
  );
}
