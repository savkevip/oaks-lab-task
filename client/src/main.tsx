import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home";

import "react-modern-drawer/dist/index.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
