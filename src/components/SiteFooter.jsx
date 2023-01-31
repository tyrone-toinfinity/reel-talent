import React from "react";
import { Link } from "react-router-dom";
import "./SiteFooter.css";

export const SiteFooter = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
      <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        Back to Top
      </button>
    </footer>
  );
};
