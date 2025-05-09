const express = require('express');
const router = express.Router();
const { createRequest } = require('../controllers/requestController');

// POST: Create book request
router.post('/', createRequest);

module.exports = router;
