import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import EnhancedTable from "./whiteboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <EnhancedTable /> */}
    <App />
  </React.StrictMode>
);
