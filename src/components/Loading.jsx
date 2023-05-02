// CSS
import "./Loading.css";
// Components
// Assets
import loading__img from "../assets/svg/loading-bar.svg";

export const Loading = () => {
  return (
    <>
      <div className="loading__screen">
        <img src={loading__img} className="loading__img" alt="loading data" />
      </div>
    </>
  );
};
