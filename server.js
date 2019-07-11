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

// order post endpoint
app.post('/custInfo', controller.orderPost)

// get posts for home page
app.get('/posts', controller.getPosts)

// post messages endpoint
app.post('/Messages', controller.sendMessage)

// get user messages
app.get('/messages', controller.checkMessages)

//delete user messages
app.delete('/api/messages/:id', controller.deleteMessage);

//toggle user messages 'isProcessed' value

app.put('/api/messages/:id', controller.toggleProcess);

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