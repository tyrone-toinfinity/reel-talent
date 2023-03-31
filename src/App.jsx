// Components
import { routes } from "./setup/routes-manager/Routes";
import { SEO } from "./SEO";
import { ScrollToTop } from "./components/hoc/ScrollToTop";
import ErrorBoundary from "./helpers/ErrorBoundary";
// Packages
import { Routes } from "react-router-dom";
import React, { useRef } from "react";

export const App = () => {
  return (
    <ErrorBoundary>
      <SEO />
      <div>
        <Routes>{routes.map((route) => route.element)}</Routes>
      </div>
      <ScrollToTop />
    </ErrorBoundary>
  );
};
