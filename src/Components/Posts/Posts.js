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
            <div>Posts</div>
        )
    }

}

export default Posts;