// CSS
import "./BookingCard.css";
// Package
import { useNavigate } from "react-router-dom";

export const BookingCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <h2 className="card__title">Simplify Your Talent Search</h2>
        <p className="card__description">Reel in Top Talent Now</p>
        <button className="card__button" onClick={() => navigate("/book")}>
          Schedule a Call
        </button>
      </div>
    </div>
  );
};
