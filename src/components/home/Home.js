import React, { Component } from 'react';
import './Home.css';
import ScrollUpBtn from '../ScrollUpBtn/ScrollUpBtn';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div>
          <h2>With English, You Are At Home Everywhere</h2>
          <p>
            Learn english and expand your general, academic, and professional
            purposes.
          </p>
        </div>
        <a href="#jkjk" className="business">
          <h3>Business English</h3>
        </a>
        <a href="#jkjk" className="general">
          <h3>General English</h3>
        </a>
        <ScrollUpBtn />
      </div>
    );
  }
}

export default Home