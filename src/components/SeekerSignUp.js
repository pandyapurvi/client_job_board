import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
//import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';

class SeekerSignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      // password_confirmation: "",
      phone: "",
      website:"",
      resume:"",
      notice_period:"",
      experience: "",
      current_title: "",
      employer: false
    };
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    // this.getPassword_confirmation = this.getPassword_confirmation.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getWebsite = this.getWebsite.bind(this);
    this.getResume = this.getResume.bind(this);
    this.getNotice = this.getNotice.bind(this);
    this.getExperience = this.getExperience.bind(this);
    this.getCurrentTitle = this.getCurrentTitle.bind(this);
    this.signup = this.signup.bind(this);
    //this.saveUser = this.saveUser.bind(this);
  }
  getName(event) {
      this.setState({
        name: event.target.value
      });
    }

    getEmail(event) {
      this.setState({
        email: event.target.value
      });
    }

    getPassword(event) {
      this.setState({
        password: event.target.value
      });
    }

    // getPassword_confirmation(event) {
    //   this.setState({
    //     password_confirmation: event.target.value
    //   });
    // }

    getPhone(event) {
      this.setState({
        phone: event.target.value
      });
    }

    getWebsite(event) {
      this.setState({
        website: event.target.value
      });
    }

    getResume(event) {
      this.setState({
        resume: event.target.value
      });
    }

    getNotice(event) {
      this.setState({
        notice_period: event.target.value
      });
    }

    getExperience(event) {
      this.setState({
        experience: event.target.value
      });
    }

    getCurrentTitle(event) {
      this.setState({
        current_title: event.target.value
      });
    }
    signup(event) {
        event.preventDefault();
        axios
          .post("https://server-job-board.herokuapp.com/users.json", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // password_confirmation: this.state.password_confirmation,
            phone: this.state.phone,
            website: this.state.website,
            resume: this.state.resume,
            notice_period: this.state.notice_period,
            experience: this.state.experience,
            current_title:this.state.current_title,
            employer:this.state.employer


          })
          .then(result => {
            console.log(result);

            this.props.history.push("/"); ////
          });
      }

  // saveUser( name, email,password) {
  //   axios.post("http://localhost:3000/users.json", {name: name, email:email, password_digest: password}).then((result) => {
  //     this.setState({user: [...this.state.user, result.data]})
  //     console.log(result.data);
  //
  //     this.props.history.push("/jobs");
  //   });
  //
  // }

  render(){
    return(

      <div>
        <Nav />
        <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.signup}>
          <input
            className="signup-input"
            type="text"
            value={this.state.name}
            onChange={this.getName}
            placeholder="Name"
          />

          <input
            className="signup-input"
            type="text"
            value={this.state.email}
            onChange={this.getEmail}
            placeholder="E-mail"
          />

          <input
            className="signup-input"
            type="password"
            value={this.state.password}
            onChange={this.getPassword}
            placeholder="Password"
          />


          <input
            className="signup-input"
            type="number"
            value={this.state.phone}
            onChange={this.getPhone}
            placeholder="phone no."
            />

          <input
            className="signup-input"
            type="text"
            value={this.state.website}
            onChange={this.getWebsite}
            placeholder="website link"
            />

          <input
            className="signup-input"
            type="text"
            value={this.state.resume}
            onChange={this.getResume}
            placeholder="resume"
            />

            <input
              className="signup-input"
              type="text"
              value={this.state.notice_period}
              onChange={this.getNotice}
              placeholder="notice period"
              />

          <input
            className="signup-input"
            type="number"
            value={this.state.experience}
            onChange={this.getExperience} min="0"
            placeholder="experience years"
            />

          <input
            className="signup-input"
            type="text"
            value={this.state.current_title}
            onChange={this.getCurrentTitle}
            placeholder="current title"
            />



          <button className="signup-page-button" type="submit" value="">
            {" "}
            Sign Up
          </button>
        </form>
      </div>


        <Footer />
      </div>
    );
  }
};

// class SeekerForm extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name:'',
//       email:'',
//       password: '',
//       phone:'',
//       website:'',
//       resume:'',
//       notice_period:'',
//       experience:'',
//       current_title:''
//     }
//     this._handleInputName = this._handleInputName.bind(this);
//     this._handleInputEmail = this._handleInputEmail.bind(this);
//     this._handleInputPassword = this._handleInputPassword.bind(this);
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }
//
//   _handleInputName(event){
//     //console.log(event.target.value);
//     this.setState({name: event.target.value})
//   };
//
//   _handleInputEmail(event){
//     //console.log(event.target.value);
//     this.setState({email: event.target.value})
//   };
//
//   _handleInputPassword(event){
//     //console.log(event.target.value);
//     this.setState({password: event.target.value})
//   };
//
//   _handleSubmit(event){
//     event.preventDefault();
//     // console.log("hi");
//     this.props.onSubmit(this.state.name, this.state.email, this.state.password)
//     //this.props.onSubmit("TEST", "this.state.pettype");
//
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this._handleSubmit}>
//           <label>Name</label>
//           <input type="text" onInput={this._handleInputName}/>
//           <br></br>
//
//           <label>Email</label>
//           <input type="text" onInput={this._handleInputEmail}/>
//           <br></br>
//
//           <label>Password</label>
//           <input type="text" onInput={this._handleInputPassword}/>
//           <br></br>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

export default SeekerSignUp;
