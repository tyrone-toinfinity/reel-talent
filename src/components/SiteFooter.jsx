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
        <Link to="/">
          <li className="footer__links">About Us</li>
        </Link>
        <Link to="/">
          <li className="footer__links">Our Services</li>
        </Link>

        <Link to="/legal">
          <li className="footer__links">Terms and Conditions</li>
        </Link>

        <Link to="/legal#privacy">
          <li className="footer__links">Privacy Policy</li>
        </Link>
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
            <img src={teamAiLogo} alt="Team AI" />
            <p className="teamAiTitle"> Team AI</p>
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};
