// CSS
import "./ErrorPage.css";
// Components
import { SiteFooter } from "../../components/SiteFooter";
import { Navbar } from "../../components/Navbar";
// Packages
import { Link, useNavigate } from "react-router-dom";
import { BookingCard } from "../../components/BookingCard";

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
        <button className="button-22" onClick={() => navigate("/")}>
          Return Home
        </button>
      </div>
      <BookingCard />
      <SiteFooter />
    </div>
  );
};
