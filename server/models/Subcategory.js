const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const subcategorySchema = new Schema({
    name: {
        type: String,
        default: 0
    },
    category: [{ type: Schema.Types.ObjectId, ref: 'Categories' }]
});

module.exports = Subcategory = mongoose.model('Subcategory', subcategorySchema);