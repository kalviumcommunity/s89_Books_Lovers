const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUser
} = require('../controllers/userController');

router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser); // PUT endpoint to update user

module.exports = router;

// This code defines the routes for user-related operations in an Express application.

