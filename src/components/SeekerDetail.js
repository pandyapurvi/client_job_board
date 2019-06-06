import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
// import UserProfile from './UserProfile';

class SeekerDetail extends Component {
  constructor(props){
    super(props);
      this.state = {
        seeker: []
      }

      const user_id = this.props.match.params.id;
      console.log("jobs" + user_id);
      const URL = 'http://localhost:3000/users/'+ user_id +'.json'

      const fetchSeeker = () => {
        axios.get(URL).then((results) => {
          console.log(results.data)
          this.setState({seeker: results.data})
        });
      }
      fetchSeeker();

  }
  render() {
    return (
      <div>
        <h6>Seeker profile</h6>
        <Detail seeker={this.state.seeker} />
      </div>
    )
  }
};

const Detail = (props) => {
  return (
    <div>
    {console.log(props.seeker)}
      <h4>Name of Candidate:{props.seeker.name}</h4>
          <p>Email address:{props.seeker.email}</p>
          <p>Contact number:{props.seeker.phone}</p>
          <p>Social Website:{props.seeker.website}</p>
          <p>Resume:{props.seeker.resume}</p>
          <p>Current title:{props.seeker.current_title}</p>
          <p>Require Notice Period:{props.seeker.notice_period}</p>
          <p>Total years of an experience:{props.seeker.experience}</p>
          <p>Employer:{props.seeker.employer}</p>
    </div>
  )
}

export default SeekerDetail;
