import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import InitialPage from "../pages/InitialPage";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={InitialPage} exact />
    </Router>
  );
}

export default Routes;