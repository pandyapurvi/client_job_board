import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import JobDetail from './components/JobDetail';
import NewJob from './components/NewJob';
import SeekerSignUp from './components/SeekerSignUp';
import EmployerSignup from './components/EmployerSignup';
import Seeker from './components/Seeker';
import SeekerDetail from './components/SeekerDetail';
import Employer from './components/Employer';
import Login from './components/Login';
import Apply from './components/Apply';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/job/:id" component={JobDetail} />
      <Route exact path="/newjob" component={NewJob}/>
      <Route exact path="/job/:id/apply" component={Apply} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/seekersignup" component={SeekerSignUp} />
      <Route exact path="/employersignup" component={EmployerSignup} />
      <Route exact path="/seeker" component={Seeker} />
      <Route exact path="/employer" component={Employer} />
      <Route exact path="/user/:id" component={SeekerDetail} />
    </div>
  </Router>
);

export default Routes;
