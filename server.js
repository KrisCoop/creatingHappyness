require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
        .then((dbInstance) => {
            console.log(`database is connected`);
            app.set('db', dbInstance)
        })
        .catch((err) => {
            console.log(`There was a problem connecting to the server: ${err}`)
        })


//put endpoints here?

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

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});