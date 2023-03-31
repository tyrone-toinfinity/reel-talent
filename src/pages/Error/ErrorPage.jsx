// CSS
import "./ErrorPage.css";
// Components
import { Navbar } from "../../components/Navbar";

import { SiteFooter } from "../../components/SiteFooter";
// Packages
import { Link, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="error-container">
        <h1 className="error__heading">Oops! Something went wrong.</h1>
        <p className="error__pg">
          The page you are looking for cannot be found or is unavailable.
        </p>

        <Link to="/">
          <button className="btn1">Return Home</button>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
};
