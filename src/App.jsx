// Components
import { routes } from "./setup/routes-manager/Routes";
import { SEO } from "./SEO";
import { ScrollToTop } from "./components/hoc/ScrollToTop";
import ErrorBoundary from "./helpers/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
// Packages
import { Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    let title;
    switch (pathname) {
      case "/blog":
        title =
          "Reel Talent Blog - Insights and Resources for Hiring and Recruitment";
        break;
      case "/demo":
        title = "Reel Talent Demo - Try Our Recruiting Solutions Now";
        break;
      case "/about":
        title = "About Us - Reel Talent";
        break;
      case "/solutions":
        title = "Reel Talent Solutions: Empowering Your Recruitment Strategies";
        break;
      case "/404":
        title = "Page Not Found - Reel Talent";
        break;
      default:
        title = "Reel Talent: Your Expert Recruiting Partner";
        break;
    }

    document.title = title;
  }, [pathname]);

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
