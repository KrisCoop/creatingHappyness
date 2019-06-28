import React, { Component }  from 'react';
import axios from 'axios';


class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
            messagesList: []
        }
    }
    render(){
        return(
            <div>
                <h4>Messages</h4>
            </div>
        )
    }
}

export default Messages;