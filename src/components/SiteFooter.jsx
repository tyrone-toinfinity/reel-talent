// CSS
import "./SiteFooter.css";
// assets
import teamAiLogo from "../assets/brand/teamai-logo.jpg";
// Package
import { Link } from "react-router-dom";

export const SiteFooter = () => {
  return (
    <footer>
      <ul className="footer__container">
        <li className="footer__links">
          <Link to="/">About Us</Link>
        </li>
        <li className="footer__links">
          <Link to="/">Our Services</Link>
        </li>
        <li className="footer__links">
          <Link to="/legal">Terms and Conditions</Link>
        </li>
        <li className="footer__links">
          <Link to="/legal#privacy">Privacy Policy</Link>
        </li>
      </ul>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Reel Talent. All rights reserved.
        <div className="powered-by">
          Powered by{" "}
          <a
            className="teamAiLink"
            href="https://www.team.ai/talent-delivery-services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={teamAiLogo}
              className="teamAiLogo"
              alt="Team AI"
              width={35}
            />
            <p className="teamAiTitle"> Team AI</p>
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};
