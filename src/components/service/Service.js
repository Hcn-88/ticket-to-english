import React, { Component } from "react";
import { motion } from "framer-motion";
import './Service.css';
import ScrollUpBtn from "../ScrollUpBtn/ScrollUpBtn";

class Service extends Component {
  render() {
    return (
      <div>
        <div className="service">
          <h3>Why Buying Your Ticket To English From Us?</h3>
          <div className="menu">
            <motion.div
              className="rocket"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <i className="fa-solid fa-rocket"></i>
              <h4>Quick Improvement</h4>
              <p>
                Quick and objective methodology. Our classes are designed to
                help you improve your speaking skills right from the start.
              </p>
            </motion.div>
            <motion.div
              className="time"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <i className="fa-solid fa-clock"></i>
              <h4>Flexible Timing</h4>
              <p>
                Flexible hours throughout the day. Teachers available to adapt
                to your schedule and facilitate the rescheduling.
              </p>
            </motion.div>
            <motion.div
              className="phones"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <i className="fa-solid fa-headphones-simple"></i>
              <h4>Online Classes</h4>
              <p>
                Classes using different platforms, and directly with a private
                teacher. Classes are done either in groups or private.
              </p>
            </motion.div>
            <motion.div
              className="brain"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <i className="fa-solid fa-brain"></i>
              <h4>Competent Teachers</h4>
              <p>
                Qualified teachers with university degrees in English Studies.
                Well-experienced teachers who worked with different levels and
                methods.
              </p>
            </motion.div>
            <motion.div
              className="speaker"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <i className="fa-solid fa-volume-high"></i>
              <h4>You Call The Shots</h4>
              <p>
                Your urgency is welcome. The more you study, the better and
                faster you improve. Your journey to fluency becomes even
                shorter.
              </p>
            </motion.div>
            <motion.div
              className="magnifier"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <h4>Simple Rules</h4>
              <p>
                We offer free experimental classes. The materials are free. No
                registration fee or charges for course cancellation.
              </p>
            </motion.div>
          </div>
        </div>
        <ScrollUpBtn />
      </div>
    );
  }
}

export default Service;
