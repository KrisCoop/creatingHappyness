import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: "Turquoise"
        }
    }

    render(){
        return(
            <div>
                <img src={this.props.photo} alt="user" />
                <p>{this.props.caption}</p>
            </div>
        )
    }

}

export default Posts;