import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Login from './../AdminMain/Login/Login';
import {Redirect} from 'react-router-dom';


import Posts from './../Posts/Posts'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            postsList: [
                {image: 'https://scontent-sjc3-1.cdninstagram.com/vp/818368a59405079f50d91c2defaf0f57/5D8FE37A/t51.2885-15/sh0.08/e35/s640x640/64739594_298974900990963_8028703173207758423_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com',
                caption: "Obsessed is a word I throw around a lot on here... but I mean cmon... these brother signs are pretty special right? . 👉🏻if you came from stories, were you right? Leave a 🚲 if you knew it .Any way I can incorporate layered trees and mountains lately I will 🤷🏼‍♀️ what would you put with the scenery? Dirt bikes, animals, unicorns...? I’m curious 🤷🏼‍♀️"
                }
            ],
            loginVisible: false,
            passwordCorrect: false
        }
    }

    componentDidMount(){
        axios.get('/posts').then((res) => {
                this.setState({
                    postsList: res.data.posts
                })
        });
        // axios get request to server to pull from "posts" table in database
        // Then, do a setState to put those posts into the postList variable in State
    }

    showLogin = () => {

        this.setState({
            loginVisible: true
        })
    }

    hide = () => {
        this.setState({
            loginVisible: false
        })
    }

    successfulLogin = () => {
        this.setState({
            passwordCorrect: true
        })
    }

    render(){
        if (this.state.passwordCorrect === true){
            return <Redirect to="/Admin" />
        }
        const postsList = this.state.postsList.reverse().map((e, i) => {    
                return <Posts photo={e.image}  caption={e.caption} key={i}/>
        })

        return(
            <div>
                {postsList}
                <p style={{cursor: 'pointer'}} onClick={this.showLogin}>Admin Login</p>
                {this.state.loginVisible ? <Login hide={this.hide} successfulLogin={this.successfulLogin}/> : null}
            </div>
        )
    }

}

export default Home;