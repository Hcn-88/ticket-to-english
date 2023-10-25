import React, { Component } from 'react';
import Slider from 'react-slick';
import './About.css';
import ScrollUpBtn from '../ScrollUpBtn/ScrollUpBtn';

class About extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="about">
        <div className="firstDiv">
          <h1>ONLINE ENGLISH CONSULTING</h1>
          <h3>
            Discover how we have become one of the most innovative and versatile
            courses in Brazil.
            <br />
            It's been 9 years since we started helping people become fluent
            speakers and achieve their goals.
          </h3>
        </div>
        <section>
          <h3 className="teamPart">Meet part of our excellent team</h3>
          <Slider {...settings}>
            <div>
              <img src="images/kitten.jpeg" alt="kitten" />
              <h4>The Grumpy Kitten</h4>
              <h5>The Original Manager</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/dwight.jpg" alt="dwight" />
              <h4>Dwight Schrute</h4>
              <h5>Assistant to the Original Manager</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/yoda.jpeg" alt="yoda" />
              <h4>Baby Yoda</h4>
              <h5>Customer Service</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/f-guy.jpg" alt="kitten" />
              <h4>Peter Griffin</h4>
              <h5>The Best Teacher</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/kramer.jpg" alt="dwight" />
              <h4>Cosmo Kramer</h4>
              <h5>Another Best Teacher</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/scott.jpg" alt="yoda" />
              <h4>Prison Mike</h4>
              <h5>One More Best Teacher</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/kitten.jpeg" alt="kitten" />
              <h4>The Grumpy Kitten</h4>
              <h5>The Original Manager</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/dwight.jpg" alt="dwight" />
              <h4>Dwight Schrute</h4>
              <h5>Assistant to the Original Manager</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <img src="images/yoda.jpeg" alt="yoda" />
              <h4>Baby Yoda</h4>
              <h5>Customer Service</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </Slider>
        </section>
        <ScrollUpBtn />
      </div>
    );
  }
}

export default About