// CSS
import "./App.css";
// Components
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { Demo } from "./pages/Demo/Demo";
// import { SEO } from "./SEO";
// Packages
import { Route, Routes, Navigate } from "react-router-dom";
import { useRef } from "react";

export const App = () => {
  const navRef = useRef();
  const scrollToNav = () =>
    navRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      {/* <SEO /> */}
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home navRef={navRef} scrollToNav={scrollToNav} />}
          ></Route>
          <Route
            path="/demo"
            element={<Demo navRef={navRef} scrollToNav={scrollToNav} />}
          ></Route>
          <Route
            path="404"
            element={<ErrorPage navRef={navRef} scrollToNav={scrollToNav} />}
          ></Route>
          <Route path="*" element={<Navigate to="404" />}></Route>
        </Routes>
      </div>
    </>
  );
};
