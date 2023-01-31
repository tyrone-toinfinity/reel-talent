// CSS
import "./Navbar.css";
// Package
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Assets
import logo from "../assets/svg/reeltalent-logo.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="logo"
          alt="Logo"
        />

        <h3 className="nav___Title" onClick={() => navigate("/")}>
          Reel Talent
        </h3>
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
