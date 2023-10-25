import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
        <div className='navbar'>
            <h1>TICKET TO ENGLISH</h1>
            <nav className='wrapper'>
                {/* THE NAVLIVK TAG ADDS THE CLASS ACTIVE TO THE ACTIVE ANCHOR TAG */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
        )
    }
}

export default Navbar