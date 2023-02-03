// CSS
import "./index.css";
// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Components
import { App } from "./App";
// Firebase
import { app, analytics } from "./firebaseConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App firebase={app} analytics={analytics} />
    </BrowserRouter>
  </React.StrictMode>
);
