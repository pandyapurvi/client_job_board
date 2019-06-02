import React, { Component } from 'react';
//import { Link, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';

class JobDetail extends Component {
  constructor(props) {
    super(props);
      this.state = {
        job: []
      }
      const job_id = this.props.match.params.id;
      console.log("jobs" + job_id);
      const URL = 'http://localhost:3000/jobs/'+ job_id +'.json'

      const fetchJob = () => {
        axios.get(URL).then((results) => {
          console.log(results.data)
          this.setState({job: results.data})
        });
      }
      fetchJob();
  }

  render() {
    return (
      <div>
        <Nav />
        <Description job={this.state.job}/>
        <Footer />
      </div>
    )
  }
};

class Description extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //
  //   }
  // }
  render(){
    return (
      <div>
        <p><strong>Job title: </strong>{this.props.job.title}</p>
        <p><strong>Posted On:</strong>{this.props.job.post_date}</p>
        <p><strong>Description:</strong>{this.props.job.description}</p>
        <p><strong>Type of Company:</strong>{this.props.job.company_type}</p>
        <p><strong>Level:</strong>{this.props.job.level}</p>
        <p><strong>Type of Job:</strong>{this.props.job.job_type}</p>
        <p><strong>Salary:</strong>{this.props.job.salary}</p>
        <p><strong>City:</strong>{this.props.job.city}</p>
        <p><strong>Job Closing Date:</strong>{this.props.job.close_date}</p>
        <button>Apply</button>//TODO
      </div>
    )
  }
}

export default JobDetail;
