const express = require('express');
const router = express.Router();
const { createRequest } = require('../controllers/requestController');

// POST: Create book request
// This endpoint allows a user to request a book from another user
router.post('/', createRequest);

module.exports = router;
