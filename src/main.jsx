import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from "./store/favoriteContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteContextProvider>
        <App />
      </FavoriteContextProvider>
    </BrowserRouter>
  </StrictMode>
);
