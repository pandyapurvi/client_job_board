import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import UserProfile from './UserProfile';
class Nav extends Component {
  render() {
    if (UserProfile.getEmail() === "") {
      // not logged in

    return (
      <div>
      <nav>
        <ul>
          <li className="nav">Logo</li>
          <li><Link to={"/"} className="nav">Jobs</Link></li>
          <li><Link to={"/about"} className="nav">About Me</Link></li>
          <li><Link to={"/login"} className="nav">Login</Link></li>

        </ul>
      </nav>
      </div>
    )
  }else{
    const isEmployer = UserProfile.getEmployer();
    const takeID = UserProfile.getUserId();
    const greeting = UserProfile.getName();
    console.log("greeting name: "+ greeting);
    return (
      <div>
      <nav>
        <ul>
          <li className="nav">Logo</li>
          <li ><Link to={"/"} className="nav">Jobs</Link></li>
          <li ><Link to={"/about"} className="nav">About Me</Link></li>
          <li ><Link to={"/logout"} className="nav">LogOut</Link></li>
          {
          isEmployer
          ?
          <li className="nav">Post a Job</li>
          : ''
        }
          <li><Link to= {"/seeker/" + takeID} className="nav" >Welcome {greeting}</Link></li>
        </ul>
      </nav>
      </div>
    )

  }
  }
};

export default Nav;
