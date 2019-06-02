import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error_message: ""
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

console.log(this.state.email, this.state.password, this.state.password_confirmation);

if (this.state.password !== this.state.password_confirmation) {
  this.setState({error_message: 'Passwords do not match.'});
  return;
}
console.log('passwords ok');

axios.post("http://localhost:3000/users", { name: this.state.name, email: this.state.email, password: this.state.password}).then((result) =>{
    //post actions
    console.log(result);
    console.log("What is this" + result.statusText);
    if (result.statusText==="Created") {
      UserProfile.setName(result.data.name);
      UserProfile.setUserId(result.data.user_id);
      UserProfile.setEmployer(result.data.employer);
      UserProfile.setEmail(result.data.email);

      // let urlstr = window.location.href;
      // if (urlstr.includes('#')) {
      //   urlstr = urlstr.split('#')[0] + '#/'
      // }
      // window.location.replace(urlstr);
    }
    })
    // .catch((error) => {
    //   console.log('error', error.response.data.errors[0]);
    //   this.setState({ error_message: error.response.data.errors[0]})
    // });

  }

  render() {
    return (
      <div>
      <Nav />
      <header>
      <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit} action="/">
            <span style={{color: 'black'}}>Name</span>
            <input
              autoFocus
              placeholder="name"
              type="text"
              onInput={this.state.name}
              onChange={this.handleChange}
            />


            <span style={{color: 'black'}}>Email</span>
            <input
              autoFocus
              type="text"
              onInput={this.state.email}
              onChange={this.handleChange}
            />


          <span style={{color: 'black'}}>Password</span>
            <input
              onInput={this.state.password}
              onChange={this.handleChange}
              type="text"
            />


          <span style={{color: 'black'}}>Confirm Password</span>
            <input
              onInput={this.state.password_confirmation}
              onChange={this.handleChange}
              type="text"
            />

          <button
            // disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p>{this.state.error_message}</p>
        </header>
        <Footer />
      </div>
    );
  }
}
