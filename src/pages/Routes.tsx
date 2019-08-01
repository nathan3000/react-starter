import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <App title="React starter" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
