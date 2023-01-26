import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Home } from "./pages/Home";

import "react-toastify/dist/ReactToastify.css";
import "react-modern-drawer/dist/index.css";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:5050/",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
    <ToastContainer position="top-center" />
  </React.StrictMode>
);
