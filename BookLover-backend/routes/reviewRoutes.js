const express = require('express');
const router = express.Router();
const { addReview } = require('../controllers/reviewController');

// POST: Add review
// This endpoint allows a user to add a review for a book
router.post('/', addReview);

module.exports = router;
