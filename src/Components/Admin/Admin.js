import react, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom;'

class Admin extends Component{

    

    render(){
        return(
            <div>
                <Link />
                <Link />
                <Router>
                    <Switch>
                        <Route path='/Admin/Orders'/>
                        <Route path='/Admin/Messages'/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
