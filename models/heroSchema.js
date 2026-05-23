const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  realName: { type: String, required: true },
  age: Number,
  powers: [String],
  city: String,
  team: String,
  numberOfMovies: Number,
  powerLevel: Number,
  universe: { type: String, required: true },
});

module.exports = mongoose.model('hero', heroSchema, 'superheroes');
