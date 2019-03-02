const mongoose = require('mongoose');
const express = require("express");

const bodyParser = require("body-parser");
const hbs = require('hbs')
const path = require('path')
const Schema = mongoose.Schema;
const data = require('./data');
const port = 3018;


const app = express();

// Connect to server
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


// Middleware logic
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware bodyParser logic
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

// Routes Declaration
// const indexRoute = require('./routes/index');
const recipeRoute = require('./routes/recipe')

// Using Routes
// app.use('/', indexRoute)
app.use('/', recipeRoute)

app.listen(port, () => {
  console.log("Listening on " + port);
});

// module.exports = app;
