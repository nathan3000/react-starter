import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import "./index.css";
import AppWrapper from "./components/AppWrapper";

ReactDOM.render(
  <AppWrapper>
    <App title="React Starter" />
  </AppWrapper>,
  document.getElementById("root")
);
