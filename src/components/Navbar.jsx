// CSS
import "./Navbar.css";
// Package
import React from "react";
import { useNavigate } from "react-router-dom";
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

        {/* <h3 className="nav___title" onClick={() => navigate("/")}>
          Reel Talent
        </h3> */}
        <ul className="nav__link__group">
          <li className="nav__links" onClick={() => navigate("/")}>
            Production & solutions
          </li>
          <li className="nav__links" onClick={() => navigate("/demo")}>
            Resources
          </li>
          <li className="nav__links" onClick={() => navigate("/demo")}>
            About us
          </li>
        </ul>
      </div>

      <div className="nav__btns">
        {" "}
        <button className="button-22" onClick={() => navigate("/demo")}>
          Request a demo
        </button>
      </div>
    </nav>
  );
};
