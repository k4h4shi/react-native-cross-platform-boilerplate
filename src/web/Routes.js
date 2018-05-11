import React from "react";
import { View } from "react-native";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, SamplesPage, NotFoundPage } from "./pages";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/samples" component={SamplesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);
