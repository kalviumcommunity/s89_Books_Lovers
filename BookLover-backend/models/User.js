const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Added password field
  bio: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
