import React, {Component} from 'react';
import './MessageDisplay.css'
import read from './../../../../envelope_read.png';
import unread from './../../../../envelope_unread.png';

class MessageDisplay extends Component{

    deleteMessage(){}

    changeStatus(){}

    render(){
       return(
        <div className="Container">
            <img src={this.props.is_processed === 'true' ? read : unread} />
            <h3>Name: {this.props.firstName} {this.props.lastName} </h3>
            <p>Email: {this.props.email}</p>
            <p>Phone #: {this.props.phone}</p>
            <p>{this.props.message}</p>
            

            <button>delete</button>
            <button>change status</button>
        </div>
    ) 
    }
    
}

export default MessageDisplay;