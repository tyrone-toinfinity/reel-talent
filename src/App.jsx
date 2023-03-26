// Components
import { routes } from "./setup/routes-manager/Routes";
import { SEO } from "./SEO";
import { ScrollToTop } from "./components/hoc/ScrollToTop";
// Packages
import { Routes, Link } from "react-router-dom";
import React, { useRef, useState } from "react";

export const App = () => {
  const navbarRef = useRef();
  return (
    <>
      <SEO />
      <div>
        <Routes>{routes.map((route) => route.element)}</Routes>
      </div>
      <ScrollToTop />
    </>
  );
};
