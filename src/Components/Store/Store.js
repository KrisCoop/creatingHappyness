import React, { Component } from 'react';
import './Store.css';

class Store extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: "Turquoise"
        }
    }

    render(){
        return(
            <div>Store</div>
        )
    }

}

export default Store;