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

    deleteMessage = (deleteId) => {
        axios.delete(`/api/messages/${deleteId}`)
            .then((response) => {
                console.log(response.data.results)
                alert(`Message Deleted.`)
                this.setState({
                    messagesList: response.data.results
                })
            })
            .catch((err) => {
                alert(`There was an issue deleting this message: ${err}`)
            })
    }

    toggleMessage = (editId) =>{
        axios.put(`/api/messages/${editId}`)
            .then((response) => {
                this.setState({
                    messagesList: response.data.results
                })
            })
            .catch((err) => {
                alert(`There was an issue editing this message: ${err}`)
            })
    }

    render(){
        const allMessages = this.state.messagesList.map((element, index, arr) => {
            return <MessageDisplay key={index} firstName={element.first_name} lastName={element.last_name} 
            email={element.email} phone={element.phone} message={element.message} 
            is_processed={element.is_processed} id={element.id} delete={this.deleteMessage} 
            toggle={this.toggleMessage}/>
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