import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </Router>
);
export default RouterComponent;
