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
                        alert("Yay it worked.")
                    }else{
                        alert("Um, there was a problem. Try again.")
                    }
                })
        }
    }

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
{/* In the future I would like to provide a message box, for them to be able to send messages directly from
the page, should they wish. From experience doing freelance work though, I am anticipating that a lot
of the patrons of this website might actually prefer sending messages via their own email accounts,
where they can comfortably attach their own photos/images as references in describing the type of
art they want Kimmie to make.

So, for now I am just going to leave a message with her direct contact info, so they have the option of
just getting in touch with her that way. */}
                <label>
                    Message:
                    <input className="messageBox" type="text" name="message" placeholder="Type:" value={this.state.message} onChange={this.updateState} />
                </label>
                <button className="submitInfo" onClick={this.postMessage}>Submit</button>

            </div>
        )
    }

}

export default Contact;