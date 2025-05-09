const mongoose = require('mongoose');
const Request = require('../models/Request');

// POST: Create a book request
const createRequest = async (req, res) => {
  try {
    console.log('Incoming data:', req.body);
    const { bookId, requesterId, ownerId, status } = req.body;

    // Validate ObjectId fields
    if (!mongoose.Types.ObjectId.isValid(bookId) ||
        !mongoose.Types.ObjectId.isValid(requesterId) ||
        !mongoose.Types.ObjectId.isValid(ownerId)) {
      return res.status(400).json({
        message: 'Invalid ObjectId provided for bookId, requesterId, or ownerId.'
      });
    }

    const newRequest = new Request({
      bookId: mongoose.Types.ObjectId(bookId),
      requesterId: mongoose.Types.ObjectId(requesterId),
      ownerId: mongoose.Types.ObjectId(ownerId),
      status: status || 'pending' // Default status
    });

    await newRequest.save();

    res.status(201).json({ message: 'Book request created successfully', request: newRequest });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating book request',
      error: error.message || error
    });
  }
};

module.exports = { createRequest };
