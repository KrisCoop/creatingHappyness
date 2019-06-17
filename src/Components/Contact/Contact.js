import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
    }

    render(){
        return(
            <div>Contact</div>
        )
    }

}

export default Contact;