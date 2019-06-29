require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');
const path = require('path');

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

massive(process.env.DATABASE_URL)
        .then((dbInstance) => {
            console.log(`database is connected`);
            app.set('db', dbInstance)
        })
        .catch((err) => {
            console.log(`There was a problem connecting to the server: ${err}`)
        })


/// Serves static files (Frontend). Must be above all of the routes.
app.use(express.static(path.join(__dirname, '/build')));

//put endpoints here?

app.post('/custInfo', (req, res) => {
    const db = req.app.get('db');
    
})

app.post('/Messages', (req, res, next) => {
    const {firstName, lastName, email, phone, message} = req.body;
    let first_name = firstName;
    let last_name = lastName;
    let is_processed = 'false';
    const db = req.app.get('db');
    db.messages.insert({first_name, last_name, email, phone, message, is_processed})
        .then((message) => {
            res.send({success: true})
        }).catch((err) => {
            res.send({success: false})
        })
})


app.get('/posts', (req, res) => {
    const db = req.app.get('db');
    db.posts.find()
        .then((posts)=>{
            res.send({success: true, posts})
        })
        .catch((err)=>{
            res.send({success:false, err})
        })
})

app.get('/messages', (req, res) => {
    const db = req.app.get('db');
    db.messages.find()
        .then((messages) =>{
            res.send({success: true, messages})
        })
        .catch((err)=>{
            res.send({success: false, err})
        })
})


/// Catch all for routing. Must be below all other routes. 
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});


app.listen(process.env.PORT || 8080, () => {
    console.log(`App is running on port ${process.env.PORT}`)
});