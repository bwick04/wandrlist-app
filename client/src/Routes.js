// Library imports
import React from "react";
import { Switch, Route } from "react-router-dom";

// Container imports
import Home from "./containers/Home";
import Destinations from "./containers/Destinations";
import NotFound from "./containers/NotFound";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/destinations" component={Destinations} />
    {/*If no router paths exist */}
    <Route component={NotFound} />
  </Switch>
);
