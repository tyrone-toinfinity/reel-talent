// CSS
import "./NavbarMobile.css";
// Package
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export const NavbarMobile = () => {
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const [hamburgerColor, setHamburgerColor] = useState("#222");
  const [toggled, setToggled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleToggle = (toggled) => {
    setToggled(toggled);
    if (toggled) {
      navbarRef.current.classList.add("navbar__show__mobile");
      setHamburgerColor("#fff");
    } else {
      setOpen(false);
      navbarRef.current.classList.add("navbar__hide__mobile");
      setTimeout(() => {
        navbarRef.current.classList.remove("navbar__show__mobile");
        navbarRef.current.classList.remove("navbar__hide__mobile");
      }, 300);
      setHamburgerColor("#222");
    }
  };

  return (
    <div>
      <div className="mobile__container">
        <Hamburger
          color={hamburgerColor}
          label="Show menu"
          duration={0.4}
          toggled={isOpen}
          toggle={setOpen}
          onToggle={handleToggle}
        />
      </div>
      <ul className="navbar__mobile" ref={navbarRef}>
        <li
          onClick={() => {
            handleToggle(!toggled);
            navigate("/");
          }}
        >
          Solutions
        </li>
        <li
          onClick={() => {
            handleToggle(!toggled);
            navigate("/");
          }}
        >
          Partners
        </li>
        <li
          onClick={() => {
            handleToggle(!toggled);
            navigate("/");
          }}
        >
          Resources
        </li>
        <li
          onClick={() => {
            handleToggle(!toggled);
            navigate("/demo");
          }}
        >
          About us
        </li>
        <li>
          <button
            className="btn1 btn1__nav__mobile"
            onClick={() => {
              handleToggle(!toggled);
              navigate("/demo");
            }}
          >
            Request a demo
          </button>
        </li>
      </ul>
    </div>
  );
};
