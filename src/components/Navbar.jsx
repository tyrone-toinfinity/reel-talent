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
        <li className="Nav__Links" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="Nav__Links" onClick={() => navigate("/book")}>
          Contact
        </li>
      </ul>
    </nav>
  );
};
