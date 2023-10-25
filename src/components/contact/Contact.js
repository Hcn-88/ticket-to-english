import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";
import ScrollUpBtn from "../ScrollUpBtn/ScrollUpBtn";

const contUrl = "http://localhost:3006/contacts";

class Contact extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      messages: [],
      name: "",
      email: "",
      message: "",
      notice: ""
    }
  }

  getValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitData = event => {
    event.preventDefault();
    let obj = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }
    let oldObj = [...this.state.messages];
    oldObj.push(obj);
    this.setState({
      messages: oldObj,
      name: "",
      email: "",
      message: "",
      notice: "Thank you for contacting us. We'll get back to you shortly."
    });
    setTimeout(() => {
      this.setState({
        notice: "",
      })
    }, 4000);
    axios
      .post(contUrl, obj)
      .then((response) => console.log("Data posted", response))
      .catch((error) => console.error(error));
  }
  

  render() {
    return (
      <div className="contact">
        <p>{this.state.notice}</p>
        <form onSubmit={this.submitData}>
          <h2>We will be delighted to hear from you</h2>
          <div className="name">
            <input
              id="name"
              type="text"
              name="name"
              required
              onChange={this.getValue}
              value={this.state.name}
            />
            <label htmlFor="name">
              <i className="fa-solid fa-user"></i> Name
            </label>
          </div>
          <div className="email">
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={this.getValue}
              value={this.state.email}
            />
            <label htmlFor="email">
              <i className="fa-solid fa-at"></i> Email
            </label>
          </div>
          <div className="message">
            <textarea
              id="message"
              rows="8"
              name="message"
              required
              onChange={this.getValue}
              value={this.state.message}
            />
            <label htmlFor="message">
              <i className="fa-solid fa-envelope"></i> Message
            </label>
          </div>
          <button>
            Send <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
        <ScrollUpBtn />
      </div>
    );
  }
}

export default Contact;
