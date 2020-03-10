const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const expenseSchema = new Schema({
    amount: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    subcategory: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Subcategory' 
        }
    ]
});

module.exports = Expense = mongoose.model('Expense', expenseSchema);