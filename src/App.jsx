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

export const App = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <SEO />
        <main>
          <Routes>{routes.map((route) => route.element)}</Routes>
        </main>
        <ScrollToTop />
      </ErrorBoundary>
      <SiteFooter />
    </>
  );
};
