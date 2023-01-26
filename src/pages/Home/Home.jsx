import React from "react";
import "./Home.css";
import { Navbar } from "../../components/Navbar";
import LandingPage from "../../components/LandingPage";

export const Home = ({ scrollToNav, navRef }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      <LandingPage />
    </div>
  );
};
