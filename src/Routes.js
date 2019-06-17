import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Faq from './Components/Faq/Faq.js';
import Gallery from './Components/Gallery/Gallery.js';
import Home from './Components/Home/Home.js';
import Order from './Components/Order/Order.js';
import Store from './Components/Store/Store.js';

export default (
    <Switch>
        <Route component={About} path="/About" />
        <Route component={Contact} path="/Contact" />
        <Route component={Faq} path="/Faq" />
        <Route component={Gallery} path="/Gallery" />
        <Route component={Order} path="/Order" />
        <Route component={Store} path="/Store" />
        <Route component={Home} path="/" />
    </Switch>
)
   