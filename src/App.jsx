// Components
import { routes } from "./setup/routes-manager/Routes";
import { SEO } from "./SEO";
import { ScrollToTop } from "./components/hoc/ScrollToTop";
import ErrorBoundary from "./helpers/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
// Packages
import { Routes } from "react-router-dom";
import React from "react";

// Lazy load footer
export const App = () => {
  return (
    <ErrorBoundary>
      <SEO />
      <main>
        <Navbar />
        <Routes>{routes.map((route) => route.element)}</Routes>
        <SiteFooter />
      </main>
      <ScrollToTop />
    </ErrorBoundary>
  );
};
