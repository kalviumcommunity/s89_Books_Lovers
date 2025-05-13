const mongoose = require('mongoose');

// Define the   Book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);




