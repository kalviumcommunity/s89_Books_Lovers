const mongoose = require('mongoose');

// Define the   Request schema
// This schema defines the structure of the Request document in MongoDB
const requestSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  requesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);




