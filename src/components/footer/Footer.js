import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css';

const emailUrl = "http://localhost:3006/emails";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      name: "",
      email: ""
    };
  }

  getValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitData = (e) => {
    e.preventDefault();
    let obj = {
      name: this.state.name,
      email: this.state.email,
    };
    let oldObj = [...this.state.emails];
    oldObj.push(obj);
    this.setState({
      emails: oldObj,
      name: "",
      email: "",
      notice: "Thank you for contacting us. Stay alert for the word of the day."
    });
    setTimeout(() => {
      this.setState({
        notice: ""
      });
    }, 5000);

    this.postData(obj);
    
  };

  // POST DATA
  postData = (data) => {
    axios
      .post(emailUrl, data)
      .then((response) => console.log("Data posted", response))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <footer>
        <div className="footer wrapper">
          <div className="icons">
            <h3>Find us on</h3>
            <div className="socialMedia">
              <div className="face">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="insta">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="twit">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="youtb">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <h3>About us</h3>
            <div className="paras">
              <p>History</p>
              <p>Teachers</p>
              <p>Students</p>
              <p>Materials</p>
            </div>
          </div>
          <div className="getTip">
            <h3>Vocabulary of the day</h3>
            <h4>Receive a word every day on your email</h4>
            <p>{this.state.notice}</p>
            <form onSubmit={this.submitData}>
              <input
                id="textInput"
                type="text"
                placeholder="Name..."
                required
                name="name"
                onChange={this.getValue}
                value={this.state.name}
              />
              <input
                id="emailInput"
                type="email"
                placeholder="Email..."
                required
                name="email"
                onChange={this.getValue}
                value={this.state.email}
              />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer