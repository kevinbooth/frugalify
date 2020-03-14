const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const categorySchema = new Schema({
    name: {
        type: String,
        default: 0
    },
    subcategories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subcategory' 
        }
    ]
});

module.exports = Category = mongoose.model('Category', categorySchema);