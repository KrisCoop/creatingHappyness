import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <div>
                <Link to="/About">About</Link>
                <Link to="/Faq">Faq</Link>
                <Link to="/Gallery">Gallery</Link>
                <Link to="/Store">Store</Link>
                <Link to="/Order">Order</Link>
                <Link to="/Posts">Posts</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/">Home</Link> 
            </div>
            
        )
    }
}

export default Nav;