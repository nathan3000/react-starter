import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import AppWrapper from "./components/AppWrapper";
import Routes from "./pages/Routes";

ReactDOM.render(
  <AppWrapper>
    <Routes />
  </AppWrapper>,
  document.getElementById("root")
);
