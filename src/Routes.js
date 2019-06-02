import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import JobDetail from './components/JobDetail';
import SignUp from './components/SignUp';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/job/:id" component={JobDetail} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>
);

export default Routes;
