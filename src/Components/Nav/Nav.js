import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from './../../Resources/website_logo_360x.png'
import facebook from './../../Resources/facebook-logo.png';
import instagram from './../../Resources/instagram-logo.png'

import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <div className="NavMain">
                <div className="logo">
                    <img src={logo} alt="logo" title="Creating Happyness" />
                </div>
                <div className="MainLinks">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Order">Order</Link>
                    <a href="https://creating-happyness.com" target="blank">Store</a>
                    <Link to="/Faq">Faq</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Gallery">Gallery</Link>               
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