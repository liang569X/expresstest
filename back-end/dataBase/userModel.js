const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  createTime: { type: Date, default: Date.now() },
  name: { type: String, required: true, trim: true },
  password: {
    type: String,
    required: true,
    trim: true
  }
});
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
