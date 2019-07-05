const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');

require('dotenv').config();

const app = express();

massive(process.env.DATABASE_URL)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Db is connected')
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

app.use(cors());
app.use(bodyParser.json());

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

app.delete('/api/messages/:id', (req, res) => {
    const dbInstance = req.app.get('db');
    const id = req.params.id
    dbInstance.DELETE_MESSAGE([id], (err, results) => {
        res.send({success: true, results})
    })
    .catch((err) => {
            res.send({success: false, err})
    })
})
/// Catch all for routing. Must be below all other routes. 
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});

const port = process.env.PORT || 8080
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
});