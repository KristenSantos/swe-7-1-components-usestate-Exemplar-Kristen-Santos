import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";


/* 
  Entry Point: main.jsx
  - Renders the React App inside the root div.

  Why?
  - Using `React.StrictMode` ensures best practices and helps catch errors in development mode.
  - `ReactDOM.createRoot()` is the recommended way to render apps in React 18+.
*/


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
