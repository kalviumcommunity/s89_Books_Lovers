const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Base routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));


// Root endpoint (optional health check or welcome message)
app.get('/', (req, res) => {
  res.send('Welcome to the BookLover API');
});

// Handle unknown routes (optional but useful)
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
