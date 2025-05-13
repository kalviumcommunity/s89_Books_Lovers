const mongoose = require('mongoose');

// Define the User schema
// This schema defines the structure of the User document in MongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Added password field
  bio: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
