import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "lenis/dist/lenis.css";
import "./styles.css";
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const root = document.getElementById("root");
root.hasChildNodes() ? hydrateRoot(root, app) : createRoot(root).render(app);
