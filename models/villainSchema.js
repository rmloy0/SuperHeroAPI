const mongoose = require('mongoose');

const villainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  realName: { type: String, required: true },
  age: Number,
  powers: [String],
  city: String,
  dangerLevel: { type: Number, min: 0, max: 100, required: true },
  numberOfMovies: Number,
  isCaptured: { type: Boolean, default: false },
  universe: { type: String, required: true },
});

module.exports = mongoose.model('Villain', villainSchema, 'supervillains');
