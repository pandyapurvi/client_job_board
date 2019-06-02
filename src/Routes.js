import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import JobDetail from './components/JobDetail';
import SignUp from './components/SignUp';
import Seeker from './components/Seeker';
import Employer from './components/Employer';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/job/:id" component={JobDetail} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/seeker" component={Seeker} />
      <Route exact path="/employer" component={Employer} />
    </div>
  </Router>
);

export default Routes;
