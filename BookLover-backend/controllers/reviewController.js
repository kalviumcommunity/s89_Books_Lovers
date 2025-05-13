const Review = require('../models/Review');

// POST: Add a new review
// This endpoint allows a user to add a review for a book
const addReview = async (req, res) => {
  try {
    const { bookId, userId, rating, comment } = req.body;

    const newReview = new Review({ bookId, userId, rating, comment });
    await newReview.save();

    res.status(201).json({ message: 'Review added successfully', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};

module.exports = { addReview };
  