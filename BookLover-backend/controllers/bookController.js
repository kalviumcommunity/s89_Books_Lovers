const Book = require('../models/Book');

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('postedBy', 'name');
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books', error });
  }
};

// GET book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('postedBy', 'name');
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch book', error });
  }
};

// GET books by user ID
const getBooksByUser = async (req, res) => {
  try {
    const books = await Book.find({ postedBy: req.params.userId }).populate('postedBy', 'name');
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user books', error });
  }
};

// Search books
const searchBooks = async (req, res) => {
  const searchQuery = req.query.query;
  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(searchQuery, 'i') },
        { author: new RegExp(searchQuery, 'i') },
        { genre: new RegExp(searchQuery, 'i') }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Search failed', error });
  }
};

// POST add new book
const addBook = async (req, res) => {
  try {
    const { title, author, genre, description, postedBy } = req.body;
    const newBook = new Book({ title, author, genre, description, postedBy });
    await newBook.save();

    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
};

// PATCH update book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, description } = req.body;

    if (!title && !author && !genre && !description) {
      return res.status(400).json({ message: 'Provide at least one field to update' });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, description },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

// DELETE book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  getBooksByUser,
  searchBooks,
  addBook,
  updateBook,
  deleteBook
};
