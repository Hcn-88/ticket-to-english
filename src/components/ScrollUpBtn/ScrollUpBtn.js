import React, { Component } from 'react';
import './ScrollUpBtn.css'; 

class ScrollUpBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    });
  }

  scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <section className="goUp" onClick={this.scrollUp}>
            <i className="fa-solid fa-arrow-up"></i>
          </section>
        )}
      </div>
    );
  }
}

export default ScrollUpBtn