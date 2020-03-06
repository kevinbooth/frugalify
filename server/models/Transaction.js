const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const transactionSchema = new Schema({
    amount: {
        type: mongoose.Types.Decimal128,
        default: 0
    },
    subcategory: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Category' 
    }]
});

module.exports = Transaction = mongoose.model('Transaction', transactionSchema);