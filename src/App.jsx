import "./App.css";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useRef } from "react";

export const App = () => {
  const navRef = useRef();
  const scrollToNav = () =>
    navRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
        {/* <Route
          path="/shop"
          element={<Shop navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
        <Route
          path="/support"
          element={<Support navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route> */}
        <Route
          path="404"
          element={<ErrorPage navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
        <Route path="*" element={<Navigate to="404" />}></Route>
      </Routes>
    </div>
  );
};
