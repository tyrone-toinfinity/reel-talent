// CSS
import "./Navbar.css";
// Package
import { useNavigate } from "react-router-dom";
// Assets
import logo from "../assets/svg/reeltalent-logo.svg";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
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
        <li className="nav__links" onClick={() => navigate("/")}>
          Solutions
        </li>
        <li className="nav__links" onClick={() => navigate("/")}>
          Partners
        </li>
        <li className="nav__links" onClick={() => navigate("/demo")}>
          Resources
        </li>
        <li className="nav__links" onClick={() => navigate("/demo")}>
          About us
        </li>
      </ul>

      <div className="nav__btn__desktop">
        {" "}
        <button className="btn1" onClick={() => navigate("/demo")}>
          Request a demo
        </button>
      </div>
      <NavbarMobile />
    </nav>
  );
};
