import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';

class Employer extends Component {
  constructor(){
    super();
    this.state = {
      employer_user:[]
    }
    // this.allSeeker = this.allSeeker.bind(this);

  const allEmployer = () => {
    axios.get('http://localhost:3000/users.json').then((results) => {
      console.log(results.data);
      const employer_data = results.data;
      const listEmployers = [];
      for (let i = 0; i < employer_data.length; i++){
        const employerData = employer_data[i];
        console.log(employerData);
        console.log("employer" + employerData.employer)

         if (employerData.employer === true){
           listEmployers.push(employerData);
         }
      }
      this.setState({employer_user: listEmployers});
      console.log(listEmployers);
    })
  };
  allEmployer();
  }

  render(){
    return (
      <div>
      <Nav />
        <h1>All Employer Profile</h1>
        <ShowEmployerProfile employer_user={this.state.employer_user}/>
        <Footer/>
      </div>
    )
  }
};

const ShowEmployerProfile =  (props) => {
  const isEmployer = UserProfile.getEmployer();

    return(
      <div>
      {console.log(props.employer_user)}
        {props.employer_user.map((s) =>
              <div>
              <Link to={"/job/" + s.id}><p>{s.name}</p></Link>
              {console.log(s.employer)}
              <p>{s.employer}</p>

              </div>


        //   {
        //   s.employer=='false'
        //   ?  <p>{s.name}</p>
        //
        //   : ''
        // }

        )}
      </div>
    )

};

export default Employer;
