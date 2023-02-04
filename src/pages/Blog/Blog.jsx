// CSS
import "./Blog.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// import { ref } from "firebase/database";
// import { database } from "../../firebaseConfig";

// Packages
import { useState, useEffect } from "react";

export const Blog = () => {
  // console.log(database);

  return (
    <div>
      <Navbar />

      <SiteFooter />
    </div>
  );
};
