// CSS
import "./NavbarMobile.css";
// Package
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export const NavbarMobile = () => {
  const navbarRef = useRef();

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
    navbarRef.current.style.transform = isOpen
      ? "translateX(200%)"
      : "translateX(100%)";
  };
  return (
    <div>
      <div className="mobile__container">
        {" "}
        {/* Mobile */}
        <Hamburger
          color="#222"
          label="Show menu"
          duration={0.3}
          onToggle={toggleNavbar}
        />
      </div>
      <ul
        className="navbar__mobile"
        ref={navbarRef}
        style={{ transform: "translateX(200%)" }}
      >
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
