const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  rating: {
    max: Number,
    average: Number,
    details: {
      1: Number,
      2: Number,
      3: Number,
      4: Number,
      5: Number
    },
    stars: String,
    min: Number
  },
  genres: [String],
  title: String,
  casts: [Object],
  durations: [String],
  collect_count: Number,
  mainland_pubdate: String,
  has_video: Boolean,
  original_title: String,
  subtype: String,
  directors: [Object],
  pubdates: [String],
  year: String,
  images: {
    small: String,
    large: String,
    medium: String
  },
  alt: String,
  id: String
});
const movieModel = mongoose.model('movie', movieSchema);
module.exports = movieModel;
