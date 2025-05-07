const express = require('express');
const blogRouter = express.Router();
const Blog = require('../models/companyWiseQuestionsSchema'); 

blogRouter.get('/blog', async (req, res) => {
    try {
        const blog = [
            { Question: 'What is the full form of HTML?', answer: 'Hypertext Markup Language' },
            { Question: 'What is the full form of CSS?', answer: 'Cascading Style Sheets' }
        ];

        res.status(200).send(blog); 
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).send({ message: 'Internal Server Error' }); 
    }
});