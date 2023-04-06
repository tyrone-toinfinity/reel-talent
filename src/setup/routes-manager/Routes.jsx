// Components
import { Home } from "../../pages/Home/Home";
import { Demo } from "../../pages/Demo/Demo";
import { Blog } from "../../pages/Blog/Blog";
import { BlogPost } from "../../pages/Blog/BlogPost";
import { Legal } from "../../pages/Legal/Legal";
import { ErrorPage } from "../../pages/Error/ErrorPage";
import { About } from "../../pages/About/About";
import { Solutions } from "../../pages/Solutions/Solutions";
import { PricingPage } from "../../pages/Pricing/PricingPage";

// Packages
import { Route, Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Route path="/" element={<Home />} />,
  },
  {
    path: "/demo",
    element: <Route path="/demo" element={<Demo />} />,
  },
  {
    path: "/",
    element: <Route path="/about" element={<About />} />,
  },
  {
    path: "/legal",
    element: <Route path="/legal" element={<Legal />} />,
  },
  {
    path: "/blog",
    element: <Route path="/blog" element={<Blog />} />,
  },
  {
    path: "/blog/:title",
    element: <Route path="/blog/:title" element={<BlogPost />} />,
  },
  {
    path: "/solutions",
    element: <Route path="/solutions" element={<Solutions />} />,
  },
  {
    path: "404",
    element: <Route path="404" element={<ErrorPage />} />,
  },
  {
    path: "pricing",
    element: <Route path="pricing" element={<PricingPage />} />,
  },
  {
    path: "*",
    element: <Route path="*" element={<Navigate to="404" />} />,
  },
];
