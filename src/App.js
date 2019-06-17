import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import routes from './Routes';
import Nav from './Components/Nav/Nav'

import './App.css';

class App extends Component{
  render(){
      return (
      <div className="App">
        <Router>
          <Nav />
          {routes}
        </Router>
      </div>
    );
  }
  
}

export default App;
