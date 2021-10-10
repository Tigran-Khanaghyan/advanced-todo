import React from "react";
import ReactDOM from "react-dom";
import App from "../src/app/index";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/scss/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
