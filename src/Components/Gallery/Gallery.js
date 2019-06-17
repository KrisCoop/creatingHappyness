import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component{
    constructor(props){
        super(props)
        this.state = {
            imageList: []
        }
    }

    render(){
        return(
            <div>Gallery</div>
        )
    }

}

export default Gallery;