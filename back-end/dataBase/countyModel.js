const mongoose = require('mongoose');

const countySchema = new mongoose.Schema({
  name: String,
  id: mongoose.Schema.Types.ObjectId,
  city: { type: String, ref: 'city' }
});
const countyModel = mongoose.model('county', countySchema);
module.exports = countyModel;
