const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, registerUser, loginUser } = require('../controllers/userController');

router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser); // New login endpoint

module.exports = router;
