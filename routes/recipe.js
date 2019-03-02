const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Recipe = require("../models/Recipe.model"); 

// get recipe route
// router.get('/recipes', (req, res) => {
//     res.render('recipes/index')
// })

router.post('/recipes', (req, res) => {
    // const { title, level, ingredients, cuisine, dishType, image, duration, creator, created } = req.body;
    const newRecipe = new Recipe({
        title,
        level,
        ingredients,
        cuisine,
        dishType,
        image,
        duration,
        creator,
        created
    })
    newRecipe.save()
    .then( result => {
        res.redirect('recipes', {showRecipesData : result})
    })
    .catch(() => {
        res.send("error is found")
    })
})

router.get('/recipes/add', (req, res) => {
    res.render('recipes/add')
})

router.get('/recipes/:id/edit', (req, res) => {
    Recipe.findById(req.params.id)
    .then( result => {

    })
})



// Set up schema
// var recipeSchema = new mongoose.Schema({
//   title: String,
//   level: String,
//   ingredients: Array,
//   cuisine: String,
//   dishType: String,
//   image: String,
//   duration: Number,
//   creator: String,
//   created: Date
// });

// // Insert one recipe
// var createRecipe = new Recipe(
//     {
//       title: 'Mac and Cheese',
//       level: 'Easy Peasy',
//       ingredients: ["macoroni", "cheese"],
//       cuisine: 'N/A',
//       dishType: 'Comfort',
//       image: 'img/maccheese.jpeg',
//       duration: 30,
//       creator: 'Viking',
//       created: '1600',
//     }
//   );


// // Find one by ID
// app.get("/recipes/:id", function(req,res) {
//     console.log("retrieve one recipe");
//     Recipe.findOne({
//       _id: req.params.id
//     })
//     .exec(function(err, results){
//       if(err){
//         res.send("error");
//       } else {
//         console.log(results);
//         res.json(results);
//       }
//     })
//   })
  
//   // Update Recipe
//   // Recipe to be updated id: 5c7386ddc2b5b134713b5542
//   app.put("/recipes/:id", function(req,res){
//     Recipe.findOneAndUpdate({
//       _id: req.params.id //query: example: A.findOneAndUpdate(conditions, update, options, callback) // executes
//     }, 
//     {$set: { duration:req.duration }}, 
//       { upsert:true }, // options
//       function(err, newDuration){ // callback
//         if(err) {
//           console.log("error");
//         } else {
//           console.log(newDuration);
//           res.status(204);
//         }
//     });
//   });
  
//   // Delete Recipe 
//   app.delete("/recipes/:id", function(req,res) {
//     Recipe.findOneAndRemove({
//       _id: req.params.id
//     }, function(err, recipe){
//       if(err) {
//         res.send("error");
//       } else {
//         console.log(recipe);
//         res.status(204);
//       }
//     });
//   });

// Recipe.create(createRecipe, (err) => {
//     console.log("recipe added")
//   })
  
//   // Insert Many
//   Recipe.insertMany(data, (err) => {
//     console.log();
//   })

// // Show all recipes 
// app.get("/recipes", function(req,res){
//     console.log("getting all recipes");
//     Recipe.find({})
//     .exec(function(err,results){
//       if(err) {
//         res.send("error");
//       } else {
//         console.log(results);
//         res.json(results);
//       }
//     })
  
//   })

module.exports = router;