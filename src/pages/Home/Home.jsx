// CSS
import "./Home.css";
// Components
import { Navbar } from "../../components/Navbar";
import { LandingPage } from "../../components/LandingPage";
import { SiteFooter } from "../../components/SiteFooter";
// Packages
import React from "react";

export const Home = ({ scrollToNav, navRef }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      <LandingPage />
      <SiteFooter />
    </div>
  );
};
