// CSS
import "./Navbar.css";
// Package
import { Link } from "react-router-dom";
// Assets
import logo from "../assets/svg/reeltalent-logo.svg";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  return (
    <nav>
      <section className="nav__container">
        <div className="logo__container">
          <img
            onClick={() => navigate("/")}
            src={logo}
            className="logo"
            alt="Logo"
          />

          <h3 className="nav__title" onClick={() => navigate("/")}>
            <span className="nav__subtitleReel">Reel</span>{" "}
            <span className="nav__subtitleTalent">Talent</span>
          </h3>
        </div>
        <ul className="nav__link__group">
          <li className="nav__links">
            <Link to="/solutions">Solutions</Link>
          </li>
          <li className="nav__links">
            <Link to="/partners">Partners</Link>
          </li>
          <li className="nav__links">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav__links">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav__links">
            <Link to="/demo">About us</Link>
          </li>
        </ul>

        <div className="nav__btn__desktop">
          {" "}
          <Link to="/demo">
            <button className="btn1">Request a demo</button>
          </Link>
        </div>
        <NavbarMobile />
      </section>
    </nav>
  );
};
