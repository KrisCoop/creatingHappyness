import React, { Component } from 'react';

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

    render(){
        return(
            <div>
                <h4>Unprocessed Orders:</h4>
                <h4>Processed Orders:</h4>
            </div>
        )
    }
}

export default CustomerOrders;