import React, { Component } from 'react';

import './Contact.css';
import axios from 'axios';

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

    postMessage = () => {
        if (!this.state.email && !this.state.phone){
            alert("Please enter at least a phone number or email address.")
        }else{
            axios.post('/Messages', this.state)
                .then((response) => {
                    if(response.data.success === true){
                        alert("Thanks for your message! We will contact you as soon as possible.")
                        this.setState({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            message: ""
                        })
                        this.props.history.push('/')
                    }else{
                        alert("There was a problem. Try again later.")
                    }
                })
        }
    }

    render(){
        return(
            <div className="ContactContainer">
                <div className="ContactMain">
                    <div>
                        <label>
                        First Name
                        <input type="text" name="firstName"  value={this.state.firstName} onChange={this.updateState} />
                        </label>

                        <label>
                        Last Name
                        <input type="text" name="lastName"  value={this.state.lastName} onChange={this.updateState}/>
                        </label>
                    
                        <label>
                        Email
                        <input type="email" name="email"  value={this.state.email} onChange={this.updateState}/>
                        </label>

                        <label>
                        Phone
                        <input type="tel" name="phone"  value={this.state.phone} onChange={this.updateState}/>
                        </label> 
                    </div>
                    <div>
                       <label>
                        Message
                        <input className="messageBox" type="text" name="message"  value={this.state.message} onChange={this.updateState} />
                        </label>
                        <button className="submitInfo" onClick={this.postMessage}>Submit</button> 
                    </div>
                    
                </div>
 
                

            </div>
        )
    }

}

export default Contact;