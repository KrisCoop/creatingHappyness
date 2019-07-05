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
        this.getMessages();
    }

    getMessages = () => {
        axios.get('/messages').then((res) => {
            this.setState({
                messagesList: res.data.messages
            })
        })
    }

    deleteMessage(deleteId){
        console.log("ran")
        axios.delete(`/api/messages/${deleteId}`)
            .then((response) => {
                alert(`Message Deleted.`)
                this.getMessages();
            })
            .catch((err) => {
                alert(`${err}`)
            })
    }

    render(){
        const allMessages = this.state.messagesList.map((element, index, arr) => {
            return <MessageDisplay key={index} firstName={element.first_name} lastName={element.last_name} 
            email={element.email} phone={element.phone} message={element.message} 
            is_processed={element.is_processed} id={element.id} delete={this.deleteMessage}/>
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