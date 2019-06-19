import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from './../../website_logo_360x.png'
import facebook from './../../facebook-logo.png';
import instagram from './../../instagram-logo.png'

import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <div className="Main">
                <div className="logo">
                    <img src={logo} alt="logo" title="Creating Happyness" />
                </div>
                <div className="links">
                    <Link to="/About">About</Link>
                    <Link to="/Faq">Faq</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <a href="https://creating-happyness.com" target="blank">Store</a>
                    <Link to="/Order">Order</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/">Home</Link>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/creatinghappynessshop" target="blank"><img src={facebook} alt="Facebook"/></a>
                    <a href="https://www.instagram.com/creatinghappyness/" target="blank"><img src={instagram} alt="Instagram"/></a>
                </div>
                 
            </div>
            
        )
    }
}

export default Nav;