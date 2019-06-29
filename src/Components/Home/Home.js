import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Admin from './../Admin/Admin';


import Posts from './../Posts/Posts'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            postsList: [
                {image: 'https://scontent-sjc3-1.cdninstagram.com/vp/818368a59405079f50d91c2defaf0f57/5D8FE37A/t51.2885-15/sh0.08/e35/s640x640/64739594_298974900990963_8028703173207758423_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com',
                caption: "Obsessed is a word I throw around a lot on here... but I mean cmon... these brother signs are pretty special right? . 👉🏻if you came from stories, were you right? Leave a 🚲 if you knew it .Any way I can incorporate layered trees and mountains lately I will 🤷🏼‍♀️ what would you put with the scenery? Dirt bikes, animals, unicorns...? I’m curious 🤷🏼‍♀️"
                }
            ]
        }
    }

    componentDidMount(){
        axios.get('/posts').then((res) => {
                this.setState({
                    postsList: res.data.posts
                })
                console.log(res)
        });
        // axios get request to server to pull from "posts" table in database
        // Then, do a setState to put those posts into the postList variable in State
    }

    render(){
        const postsList = this.state.postsList.reverse().map((e, i) => {    
                return <Posts photo={e.image}  caption={e.caption} key={i}/>
        })

        return(
            <div>
                {postsList}
                <Link to="/Admin" component={Admin}>Admin Login</Link>
            </div>
        )
    }

}

export default Home;