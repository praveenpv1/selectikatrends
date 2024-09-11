const express = require('express');

const app = express();
const cors = require("cors");

const feed_posts_routes = require('./Routes/feeds_posts.router');

const mongoose = require('mongoose');

mongoose.connect(`${process.env.DBCONNECTIONSTRING}${process.env.DB}`)
.then(() => console.log(''))
.catch(err => console.log('DB Connection Error',err));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.status(200).json({});
    }
    next();
});

app.use('/feed_posts', feed_posts_routes);

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    res.status(404).json({
      error: {
        message: err.message
      }
    });
});

module.exports = app;