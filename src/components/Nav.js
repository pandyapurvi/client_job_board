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
          <li>Logo</li>
          <li><Link to={"/"}>Jobs</Link></li>
          <li><Link to={"/about"}>About Me</Link></li>
          <li><Link to={"/login"}>Login</Link></li>

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
          <li>Logo</li>
          <li><Link to={"/"}>Jobs</Link></li>
          <li><Link to={"/about"}>About Me</Link></li>
          <li><Link to={"/logout"}>LogOut</Link></li>
          {
          isEmployer
          ?
          <li>Post a Job</li>
          : ''
        }
          <Link to= {"/seeker/" + takeID}> <p>Welcome {greeting}</p></Link>
        </ul>
      </nav>
      </div>
    )

  }
  }
};

export default Nav;
