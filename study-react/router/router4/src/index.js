import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./app";
// import Home from './examples/redirect';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
