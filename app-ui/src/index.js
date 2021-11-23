import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import PageLayout from "layouts/PageLayout/PageLayout";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageLayout} />
      <Redirect from="*" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
