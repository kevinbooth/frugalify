const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const paycheckSchema = new Schema({
    plannedAmount: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    actualAmount: {
        type: mongoose.Types.Decimal128,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Paycheck = mongoose.model('Paycheck', paycheckSchema);