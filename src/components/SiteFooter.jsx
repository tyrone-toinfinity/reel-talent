// CSS
import "./SiteFooter.css";
// Package
import { useNavigate } from "react-router-dom";

export const SiteFooter = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <ul className="footer__container">
        <li className="footer__links" onClick={() => navigate("/")}>
          About Us
        </li>
        <li className="footer__links" onClick={() => navigate("/")}>
          Our Services
        </li>
        <li className="footer__links" onClick={() => navigate("/legal")}>
          Terms and Conditions
        </li>
        <li className="footer__links" onClick={() => navigate("/")}>
          Privacy Policy
        </li>
      </ul>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Reel Talent. All rights reserved.
      </div>
    </footer>
  );
};
