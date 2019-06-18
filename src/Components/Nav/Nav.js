import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from './../../website_logo_360x.png'

import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <div>
                <div className="logo">
                    <img src={logo} alt="logo" title="Creating Happyness" />
                </div>
                <Link to="/About">About</Link>
                <Link to="/Faq">Faq</Link>
                <Link to="/Gallery">Gallery</Link>
                <a href="https://creating-happyness.com" target="blank">Store</a>
                <Link to="/Order">Order</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/">Home</Link> 
            </div>
            
        )
    }
}

export default Nav;