// CSS
import "./BookingCard.css";
// Package
import { useNavigate } from "react-router-dom";

export const BookingCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card__book">
        <h2 className="card__title">Reel in top Talent</h2>
        <button className="card__button" onClick={() => navigate("/demo")}>
          Request a demo{" "}
        </button>
      </div>
    </div>
  );
};
