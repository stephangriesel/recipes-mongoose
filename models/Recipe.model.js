var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Set up schema
var recipeSchema = new Schema({
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

  module.exports = mongoose.model('LatestRecipe', recipeSchema);