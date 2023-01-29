import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/reeltalent-logo.svg";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <Link to={"/"}>
          {" "}
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link className="Nav__Links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="Nav__Links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="Nav__Links" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="Nav__Links" to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="Nav__Links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
