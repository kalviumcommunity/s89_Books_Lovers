const mongoose = require("mongoose");
const { post } = require("../controller/blogRouter");

const blogSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    description: { type: String, required: true },
    comment: { type: String, required: true }
});


module.exports = mongoose.model('Blog', blogSchema);