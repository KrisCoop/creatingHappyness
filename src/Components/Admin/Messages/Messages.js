import React, { Component }  from 'react';
import axios from 'axios';
import MessageDisplay from './MessageDisplay/MessageDisplay';
import { jsxNamespacedName } from '@babel/types';

class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
            messagesList: [
                {
                    first_name: 'Jane',
                    last_name: 'Doe',
                    email: 'Jane@Doe.com',
                    phone: '555-0000',
                    message: 'Jane loves Tarzan',
                    is_processed: 'false'
                },
            
                {
                    first_name: 'Tarzan',
                    last_name: 'Apes',
                    email: 'Jungle@Ape.com',
                    phone: '555-0001',
                    message: 'Tarzan likes Jane as a friend...',
                    is_processed: 'true'
                }
            ]
        }
    }
    render(){
        const allMessages = this.state.messagesList.map((element, index, arr) => {
            return <MessageDisplay firstName={element.first_name} lastName={element.last_name} 
            email={element.email} phone={element.phone} message={element.message} 
            is_processed={element.is_processed}/>
        })
        return(
            <div>
                <h4>Messages</h4>
            </div>
        )
    }
}

export default Messages;