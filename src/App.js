// @flow

import React from "react";
import { Router, Route, Switch } from "./utils/Router";
import { HomePage, SamplesPage, NotFoundPage } from "./pages";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/samples" component={SamplesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);
