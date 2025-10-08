import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router/Router.jsx";
import MainContextProvider from "./Context/MainContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <Router></Router>
    </MainContextProvider>
  </StrictMode>
);
