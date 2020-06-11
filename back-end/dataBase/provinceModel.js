const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String, ref: 'city' },
  county: { type: String, ref: 'county' }
//   cities: [{ type: mongoose.Schema.Types.ObjectId, name: String, ref: 'city' }],
//   counties: [{ type: mongoose.Schema.Types.ObjectId, name: String, ref: 'county' }],
});
const provinceModel = mongoose.model('province', provinceSchema);
module.exports = provinceModel;
