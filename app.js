const mongoose = require('mongoose');
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const Schema = mongoose.Schema;
const data = require('./data');
var port = 3010;
var Recipe = require("./models/Recipe.model"); // modular approach

app.listen(port, () => {
  console.log("Listening on " + port);
});


// Connect to server
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Routes
app.get('/', function (req, res) {
  res.send('Test2')
});

// Show all recipes 
app.get("/recipes", function(req,res){
  console.log("getting all recipes");
  Recipe.find({})
  .exec(function(err,results){
    if(err) {
      res.send("error");
    } else {
      console.log(results);
      res.json(results);
    }
  })

})

// Set up schema
var recipeSchema = new mongoose.Schema({
  title: String,
  level: String,
  ingredients: Array,
  cuisine: String,
  dishType: String,
  image: String,
  duration: Number,
  creator: String,
  created: Date
});


// Insert one recipe
var createRecipe = new Recipe(
  {
    title: 'Mac and Cheese',
    level: 'Easy Peasy',
    ingredients: ["macoroni", "cheese"],
    cuisine: 'N/A',
    dishType: 'Comfort',
    image: 'img/maccheese.jpeg',
    duration: 30,
    creator: 'Viking',
    created: '1600',
  }
);

Recipe.create(createRecipe, (err) => {
  console.log("recipe added")
})

// Insert Many
Recipe.insertMany(data, (err) => {
  console.log();
})

// Find one by ID
app.get("/recipes/:id", function(req,res) {
  console.log("retrieve one recipe");
  Recipe.findOne({
    _id: req.params.id
  })
  .exec(function(err, results){
    if(err){
      res.send("error");
    } else {
      console.log(results);
      res.json(results);
    }
  })
})

// Update Recipe
// Recipe to be updated id: 5c7386ddc2b5b134713b5542
app.put("/recipes/:id", function(req,res){
  Recipe.findOneAndUpdate({
    _id: req.params.id //query: example: A.findOneAndUpdate(conditions, update, options, callback) // executes
  }, 
  {$set: { duration:req.duration }}, 
    { upsert:true }, // options
    function(err, newDuration){ // callback
      if(err) {
        console.log("error");
      } else {
        console.log(newDuration);
        res.status(204);
      }
  });
});

// Delete Recipe 
app.delete("/recipes/:id", function(req,res) {
  Recipe.findOneAndRemove({
    _id: req.params.id
  }, function(err, recipe){
    if(err) {
      res.send("error");
    } else {
      console.log(recipe);
      res.status(204);
    }
  });
});


