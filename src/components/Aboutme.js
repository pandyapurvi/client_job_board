import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

class Aboutme extends Component {
  render(){
    return(
      <div>
        <h3>About me</h3>
        <p>Hi There! I am a sofware developer and enjoy making differernt kind of website. This is my dream to make a job-board website application. I have used react.js a front-end frame work. I am open to any feedback.</p>

      <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">

                <span class="contact-text place">Sydney | NSW</span>

            </li>
            <li class="list-item">
                  <a href="tel:1-212-555-5555" title="Give me a call">(043) 2912-432</a>
            </li>

            <li class="list-item">
                <span class="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">pandyapurvi13@gmail.com</a>
                </span>
            </li>
          </ul>
          <hr/>
          <ul class="social-media-list">
            <li>
              <a href="https://github.com/ElliMoty" target="_blank" class="contact-icon">
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/elli-motaghi/" target="_blank" class="contact-icon">

              </a>
            </li>
          </ul>

          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED
          </div>

        </div>
      </div>
    )
  }
};
export default Aboutme;
