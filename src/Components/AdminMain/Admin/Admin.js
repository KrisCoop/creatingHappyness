import React, {Component} from 'react'
import { Route, Link, Switch } from "react-router-dom";

import './Admin.css'

import CustomerOrders from './../CustomerOrders/CustomerOrders';
import Messages from './../Messages/Messages';

class Admin extends Component{

    

    render(){
        return(
            <div className="MainBox">
                <div className="links">
                    <Link to="/Admin/Orders"><h3>Current Orders</h3></Link>
                    <Link to="/Admin/Messages"><h3>Messages</h3></Link>
                </div>
                
                <hr />
                 <Switch>
                    <Route path='/Admin/Orders' component={CustomerOrders}/>
                    <Route path='/Admin/Messages' component={Messages}/>
                </Switch>
            </div>
        )
    }
}

export default Admin;
