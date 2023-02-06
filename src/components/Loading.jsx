// CSS
import "./Loading.css";
// Components
import { Navbar } from "./Navbar";
// Assets
import loading__img from "../assets/svg/loading-bar.svg";
import { SiteFooter } from "./SiteFooter";

export const Loading = () => {
  return (
    <>
      <Navbar />
      <div className="loading__screen">
        <img src={loading__img} className="loading__img" alt="loading data" />
      </div>
    </>
  );
};
