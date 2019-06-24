
import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const baseURL = "https://server-job-board.herokuapp.com/users.json";
    let user_id = -1;
    let userDetail = null;

    axios.get(baseURL).then((result) =>{

      const userslist = result.data;
        console.log(this.state.email);
        console.log(userslist);
        for (let i=0; i<userslist.length; i++) {
          if (userslist[i].email === this.state.email) {
            user_id = userslist[i].id;
            userDetail = userslist[i];
            break;
          }
        }
        console.log(user_id);
      if (user_id > 0) {
        UserProfile.setName(userDetail.name);
        UserProfile.setUserId(user_id);
        UserProfile.setEmployer(userDetail.employer);
        UserProfile.setEmail(userDetail.email);

        let urlstr = window.location.href;
        if (urlstr.includes('#')) {
          urlstr = urlstr.split('#')[0] + '#/'
        }
        window.location.replace(urlstr);
      }
    });

  }

  render() {
    return (
      <div>
      <Nav />
      <header className="login">
      <h1>Login</h1>
      <p>Welcome Back! New to the site?</p>
      <Link to={"/seekersignup"} className="signup-link"><p>Signup here if you are a Seeker</p></Link>
      <Link to={"/employersignup"} className="signup-link"><p>Signup here if you are an Employer</p></Link>

      <form onSubmit={this.handleSubmit} action="/">
      <FormGroup controlId="email" bsSize="large">
      <span style={{color: 'black'}}></span>
      <FormControl
      autoFocus
      type="email"
      placeholder="Your email address"
      value={this.state.email}
      onChange={this.handleChange}
      className="login-input"
      />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
      <span style={{color: 'black'}} ></span>
    <br/>
      <FormControl
      value={this.state.password}
      onChange={this.handleChange}
      type="password"
      placeholder="Password"
      className="login-input"
      />
      </FormGroup>
      <Button
      block
      bsSize="large"
      disabled={!this.validateForm()}
      type="submit"
      className="login-btn"
      >
      Login
      </Button>
      </form>
      </header>
      <Footer />
      </div>
    );
  }
};
