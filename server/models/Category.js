const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const categorySchema = new Schema({
    name: {
        type: String,
        default: 0
    }
});

module.exports = Category = mongoose.model('Category', categorySchema);