import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

import Posts from './../Posts/Posts'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            postsList: [
                {}
            ]
        }
    }

    componentDidMount(){
        axios.get("/test").then((res) => {console.log(res.data)})
    }

    render(){
        // const postsList = this.state.postsList.reverse().map((e, i) => {    // I'm going to wait before I implement this
        //     if (i < 20){
        //         return <Posts imageURL={e.imageURL} name={e.name} text={e.text}/>
        //     }
        // })
        return(
            <div>
                Home
                {/* {postsList} */}
            </div>
        )
    }

}

export default Home;