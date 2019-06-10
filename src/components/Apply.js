import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';

class Apply extends Component {
  constructor() {
    super();
    this.state = {
      application: []
    }
    this.saveJob = this.saveJob.bind(this);
    // this.fetchJobs = this.fetchJobs.bind(this);
    //
    // const allJobs = () => {
    //   axios.get('http://localhost:3000/jobs.json').then((results) => {
    //     console.log(results.data);
    //     this.setState({jobs :results.data});
    //   })
    // };
    // allJobs();

  }

  saveJob( application_date, resume, cover_letter) {
    const user_id = UserProfile.getUserId();
    const job_id = this.props.match.params.id;
    console.log("Userid: " + user_id);
    console.log("Jobid: " + job_id);
    axios.post("https://server-job-board.herokuapp.com/applications.json", {user_id: user_id, job_id: job_id, application_date:application_date, resume:resume, cover_letter:cover_letter}).then((result) => {
      console.log("result.data : " + result.data);
      let urlstr = window.location.href;
      //let urlstr = "http://localhost:3001/?#/";
      console.log("urlstr: " + urlstr);
      if (urlstr.includes('#')) {
        urlstr = urlstr.split('#')[0] + '#/'
      }
      window.location.replace(urlstr);
      this.setState({application: [...this.state.application, result.data]})


      //this.props.history.push("#/");

    });

  }

  render() {
    return (
      <div>
      <Nav/>
          <p>Apply Job Here</p>
          <CreateForm onSubmit={this.saveJob}/>
          <Footer/>
      </div>
    )
  }
};

class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      application_date:'',
      resume:'',
      cover_letter: ''
    }

    this._handleInputApplication_date = this._handleInputApplication_date.bind(this);
    this._handleInputResume = this._handleInputResume.bind(this);
    this._handleInputCover_letter = this._handleInputCover_letter.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleInputApplication_date(event) {
    console.log(event.target.value);
    this.setState({application_date: event.target.value})
  };
  _handleInputResume(event) {
    console.log(event.target.value);
    this.setState({resume: event.target.value})
  };

  _handleInputCover_letter(event) {
    console.log(event.target.value);
    this.setState({cover_letter: event.target.value})
  };

  _handleSubmit(event){
    event.preventDefault();
    // console.log("hi");
    this.props.onSubmit(this.state.application_date, this.state.resume, this.state.cover_letter);
    //this.props.onSubmit("TEST", "this.state.pettype");

  }
  render () {

    return (
      <div className="editform">
      <form onSubmit={this._handleSubmit} >

      <label>Application Date</label>
      <input type="date" onInput={this._handleInputApplication_date}/>
      <br />

      <label>Resume</label>
      <textarea onInput={this._handleInputResume}/>
      <br />

      <label>Cover letter</label>
      <textarea onInput={this._handleInputCover_letter}/>
      <br />
      <button type="submit" className="alter">Apply</button>

      </form>
      </div>

    );
  }
};



export default Apply;
