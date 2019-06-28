import React from 'react';
import read from './../../../../envelope_read.png';
import unread from './../../../../envelope_unread.png';

function MessageDisplay (){
    return(
        <div className="Container">
            <p>{this.props.firstName}</p>
            <p>{this.props.lastName}</p>
            <p>{this.props.email}</p>
            <p>{this.props.phone}</p>
            <p>{this.props.message}</p>
            <img src={this.props.is_processed === 'true' ? read : unread} />
            
        </div>
    )
}