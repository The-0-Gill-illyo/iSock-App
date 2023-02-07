//Page Imports
import App from "./App";
import "./index.css";

//Other Imports
import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
