// CSS
import "./SiteFooter.css";
// assets
import teamAiLogo from "../assets/brand/teamai-logo.jpg";
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
        <li
          className="footer__links"
          onClick={() => navigate("/legal#terms__conditions")}
        >
          Terms and Conditions
        </li>
        <li
          className="footer__links"
          onClick={() => navigate("/legal#privacy")}
        >
          Privacy Policy
        </li>
      </ul>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Reel Talent. All rights reserved.
      </div>
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
    </footer>
  );
};
