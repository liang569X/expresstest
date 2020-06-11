const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  province: { type: String, ref: 'province' }

});
const cityModel = mongoose.model('city', citySchema);
module.exports = cityModel;
