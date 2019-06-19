import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Contact.css';

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        }
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // this is where I need to put an axios.post request, to submit info and then hook up this function to the submit button.

    render(){
        return(
            <div>
                <label>
                    First Name:
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.updateState} />
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.updateState}/>
                </label>
                
                <label>
                    Email:
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.updateState}/>
                </label>

                <label>
                    Phone:
                    <input type="tel" name="phone" placeholder="phone" value={this.state.phone} onChange={this.updateState}/>
                </label>

                <label>
                    Message:
                    <input className="messageBox" type="text" name="message" placeholder="Type:" value={this.state.message} onChange={this.updateState} />
                </label>
                <button className="submitInfo">Submit</button>
            </div>
        )
    }

}

export default connect(state => state)(Contact);