import React from "react";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import InitialPage from "../pages/InitialPage";
import SearchPage from "../pages/SearchPage/SearchPage";

const Routes = () => {
  return (
    <Router>

      <Route path="/inicio" component={InitialPage} exact />
      <Route path="/buscaProcesso/:base64SearchValue" component={SearchPage} exact />
      <Route path={["/processo", "/processo/:id"]} component={'' /* TODO */} exact />

      <Route path={["/", "/buscaProcesso"]} exact >
        <Redirect to="/inicio" />
      </Route>

    </Router>
  );
}

export default Routes;