import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LaunchesPage from "./pages/LaunchesPage";
import SingleLaunchPage from "./pages/SingleLaunchPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LaunchesPage} />
        <Route path="/launch/:id" component={SingleLaunchPage} />
      </Switch>
    </Router>
  );
};

export default App;
