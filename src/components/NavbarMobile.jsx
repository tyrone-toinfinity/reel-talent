// CSS
import "./NavbarMobile.css";
// Package
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export const NavbarMobile = () => {
  const navbarRef = useRef();
  const navigate = useNavigate();
  return (
    <div>
      <div className="mobile__container">
        {" "}
        {/* Mobile */}
        <Hamburger
          color="#222"
          label="Show menu"
          duration={0.3}
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              navbarRef.current.classList.add("navbar__show__mobile");
              //   navbarRef.current.classList.remove("navbar__hide__mobile");
            } else {
              // close a menu
              navbarRef.current.classList.add("navbar__hide__mobile");
              setTimeout(() => {
                navbarRef.current.classList.remove("navbar__show__mobile");
                navbarRef.current.classList.remove("navbar__hide__mobile");
              }, 300);
            }
          }}
        />
      </div>
      <ul className="navbar__mobile" ref={navbarRef}>
        <li onClick={() => navigate("/")}>Solutions</li>
        <li onClick={() => navigate("/")}>Partners</li>
        <li onClick={() => navigate("/")}>Resources</li>
        <li onClick={() => navigate("/demo")}>About us</li>
        <li>
          {" "}
          <button
            className="btn1 btn1__nav__mobile"
            onClick={() => navigate("/demo")}
          >
            Request a demo
          </button>
        </li>
      </ul>
    </div>
  );
};
