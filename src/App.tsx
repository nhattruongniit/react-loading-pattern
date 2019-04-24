import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { containers } from "./features";

export default () => (
  <Router>
    <containers.LoadingContainer />
    <Route path="/" component={containers.JobListContainer} />
  </Router>
);
