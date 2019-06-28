import react, { Component } from 'react';
import axios from 'axios';

// At some point, this component will make an axios request to the server to get all the customer orders 
// from the databases. It will then go over every object in the response array and check to see if
// its process key is true/false. If false, it will go into the unprocessedOrders array; if true, it 
// will go into the processedOrders array.

class CustomerOrders extends Component{
    constructor(props){
        super(props)
        this.state = {
            processedOrders: [],
            unprocessedOrders: []
        }
    }
}

export default CustomerOrders;