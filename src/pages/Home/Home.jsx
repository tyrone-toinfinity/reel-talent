import React from "react";
import "./Home.css";
import { Navbar } from "../../components/Navbar";
import LandingPage from "../../components/LandingPage";
import { LandingPage2 } from "../../components/LandingPage2";
import { SiteFooter } from "../../components/SiteFooter";

export const Home = ({ scrollToNav, navRef }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      {/* <LandingPage /> */}
      <LandingPage2 />
      <SiteFooter />
    </div>
  );
};
