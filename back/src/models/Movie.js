const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: {
    type: Number,
    min: 1895,
    max: new Date().getFullYear(),
    required: true,
  },
  director: { type: String, required: true },
  duration: { type: Number, min: 1, required: true },
  genre: { type: [String], required: true },
  rate: { type: Number, min: 0, max: 10, required: true },
  poster: {
    type: String,
    required: true,
  },
  scene: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
