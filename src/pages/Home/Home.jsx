import React from "react";
import "./Home.css";
import { Navbar } from "../../components/Navbar";
import LandingPage from "../../components/LandingPage";
import Footer from "../../components/Footer";

export const Home = ({ scrollToNav, navRef }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      <LandingPage />
      <Footer />
    </div>
  );
};
