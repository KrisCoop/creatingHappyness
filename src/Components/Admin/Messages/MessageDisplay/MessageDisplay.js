import React, {Component} from 'react';
import './MessageDisplay.css'
import read from './../../../../Resources/envelope_read.png';
import unread from './../../../../Resources/envelope_unread.png';
import axios from 'axios';

class MessageDisplay extends Component{

    render(){
       return(
        <div className="Container">
            <img src={this.props.is_processed === 'true' ? read : unread} alt="read status" />
            <h3>Name: {this.props.firstName} {this.props.lastName} </h3>
            <p>Email: {this.props.email}</p>
            <p>Phone #: {this.props.phone}</p>
            <p>{this.props.message}</p>
            

            <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
            <button onClick={() => this.props.toggle(this.props.id)}>Change Status</button>
        </div>
    ) 
    }
    
}

export default MessageDisplay;