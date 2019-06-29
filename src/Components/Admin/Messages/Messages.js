import React, { Component }  from 'react';
import axios from 'axios';
import './Messages.css'
import MessageDisplay from './MessageDisplay/MessageDisplay';


class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
            messagesList: []
        }
    }

    componentDidMount(){
        axios.get('/messages').then((res) => {
            this.setState({
                messagesList: res.data.messages
            })
        })
    }

    render(){
        const allMessages = this.state.messagesList.map((element, index, arr) => {
            return <MessageDisplay firstName={element.first_name} lastName={element.last_name} 
            email={element.email} phone={element.phone} message={element.message} 
            is_processed={element.is_processed}/>
        })
        return(
            <div>
                <div className= "Messages">
                    {allMessages}
                </div>
                
            </div>
        )
    }
}

export default Messages;