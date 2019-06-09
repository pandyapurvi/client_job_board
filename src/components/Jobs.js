import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    }

    this.fetchJobs = this.fetchJobs.bind(this);

    const allJobs = () => {
      axios.get('https://server-job-board.herokuapp.com/jobs.json').then((results) => {
        console.log(results.data);
        this.setState({jobs :results.data});
      })
    };
    allJobs();

  }

  fetchJobs = (c, t) => {
    let title = t;
    let city = c;

    axios.get('https://server-job-board.herokuapp.com/jobs.json').then((results) => {
      //console.log(results.data);
      const job_data = results.data;
      const listJobs = [];
        for (let i = 0; i < job_data.length; i++) {
          const jobData = job_data[i];

          if ( city === '' && title === ''){
            listJobs.push(jobData);//All jobs
          } else if (city!== '' && title === '') {
            if ( jobData.city !==null && jobData.city === city){
              listJobs.push(jobData);//All city and jobs
            }
          } else if ( city === '' && title !== null){
            if( jobData.title!== null && jobData.title === title){
              listJobs.push( jobData )//All city and selected title
            }
          } else  {
            if ((jobData.city === city) && (jobData.title === title)){
              listJobs.push( jobData );//selected title  and selected city
            }
          }
        }
        this.setState({jobs: listJobs});
    })
  }


render() {
  return (
    <div>

      <p>Search over current positions</p>
      <p>for developers in one sizzlin' spot</p>

      <SearchForm onSubmit={ this.fetchJobs}/>
      <Showjobs jobs={this.state.jobs}/>

    </div>
  )
}
};

const Showjobs = (props) => {

  if (props.jobs.length === 0){
    return 'Your search is not matching. Please try again.'
  } else {
    //TODO: sort by date
    return (
      <div>
      {props.jobs.map((job)=>

          <Link to={"/job/" + job.id} key={job.id}><p>{job.title}</p></Link>

      )}
      </div>
    )

  }


};

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      city: ''
    }

    this._handleChangeCity = this._handleChangeCity.bind(this);
    this._handleChangeJobTitle = this._handleChangeJobTitle.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

    _handleChangeCity(event){
    console.log(event.target.value);
    this.setState({ city: event.target.value});
    //console.log(this.state.category);
  };

  _handleChangeJobTitle(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value});
    //console.log(this.state.pettype);
  };

  _handleSubmit(event){
    event.preventDefault();
    console.log("hi");

    this.props.onSubmit(this.state.city, this.state.title);
  }


  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>Job title:</label>
            <select onChange={this._handleChangeJobTitle}>
            <option>{''}</option>
            <option>Graduate Software Enginner</option>
            <option>Junior Software Enginner</option>
            </select>

            <label>City:</label>
              <select onChange={this._handleChangeCity}>
              <option>{''}</option>
              <option>Sydney</option>
              <option>Melbourn</option>
              <option>Perth</option>
              <option>Canberra</option>
              </select>

              <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Jobs;
