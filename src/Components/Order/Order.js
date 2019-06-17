import React, { Component } from 'react';
import './Order.css';

class Order extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: "Turquoise"
        }
    }

    render(){
        return(
            <div>Order</div>
        )
    }

}

export default Order;