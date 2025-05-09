const express = require('express');
const router = express.Router();
const { addReview } = require('../controllers/reviewController');

// POST: Add review
router.post('/', addReview);

module.exports = router;
