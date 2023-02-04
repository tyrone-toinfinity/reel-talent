// Components
import { routes } from "./setup/routes-manager/Routes";
import { SEO } from "./SEO";
// Packages
import { Routes, Link } from "react-router-dom";
import React, { useRef, useState } from "react";

export const App = () => {
  return (
    <>
      <SEO />
      <div>
        <Link to="/blog"></Link>
        <Routes>{routes.map((route) => route.element)}</Routes>
      </div>
    </>
  );
};
