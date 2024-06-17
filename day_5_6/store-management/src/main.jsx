import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.scss"; // Change to .scss for Sass support

import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
