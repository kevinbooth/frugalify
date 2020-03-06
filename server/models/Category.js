const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const categorySchema = new Schema({
    name: {
        type: String,
        default: 0
    },
    subcategory: [{ type: Schema.Types.ObjectId, ref: 'Subcategories' }]
});

module.exports = Category = mongoose.model('Category', categorySchema);