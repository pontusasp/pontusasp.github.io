import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Kth from "./pages/Kth";
import Apps from "./pages/Apps";
import T30 from "./pages/T30";
import RedPainterPrivacyPolicy from "./pages/apps/the-red-painter/RedPainterPrivacyPolicy";
import Root from "./Root";
import Dh2650Blog from "./pages/kth/Dh2650Blog";
import LostAndFound from "./pages/LostAndFound";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/lost-and-found",
        element: <LostAndFound />,
      },
      {
        path: "/lostandfound",
        element: <LostAndFound />,
      },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/apps",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Apps />,
      },
      {
        path: "the-red-painter",
        element: <Apps />,
      },
      {
        path: "the-red-painter/privacy-policy",
        element: <RedPainterPrivacyPolicy />,
      },
    ],
  },
  {
    path: "kth",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Kth />,
      },
      {
        path: "dh2650/blog",
        element: <Dh2650Blog />,
      },
    ],
  },
  { path: "tove/30", element: <T30 /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
