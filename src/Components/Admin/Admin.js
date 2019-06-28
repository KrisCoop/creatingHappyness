import React, {Component} from 'react'
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";

import CustomerOrders from './CustomerOrders/CustomerOrders';
import Messages from './Messages/Messages';

class Admin extends Component{

    

    render(){
        return(
            <div>
                <Link to="/Admin/Orders">Current Orders</Link>
                <Link to="/Admin/Messages">Messages</Link>

                 <Switch>
                    <Route path='/Admin/Orders' component={CustomerOrders}/>
                    <Route path='/Admin/Messages' component={Messages}/>
                </Switch>
            </div>
        )
    }
}

export default Admin;
