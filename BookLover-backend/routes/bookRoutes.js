const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  getBooksByUser,
  searchBooks,
  addBook,
  deleteBook,
  updateBook
} = require('../controllers/bookController');

// POST new book
// This endpoint allows a user to add a new book
router.post('/', addBook); // New POST endpoint to add a book

// GET routes
router.get('/search/query', searchBooks); // Search for books
router.get('/user/:userId', getBooksByUser); // Get books by user ID
router.get('/:id', getBookById); // Get a book by its ID
router.get('/', getAllBooks);
router.delete("/:id",deleteBook) // Get all books
router.patch("/:id",updateBook);

module.exports = router;
