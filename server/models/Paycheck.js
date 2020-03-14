const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const paycheckSchema = new Schema({
    planned: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    actual: {
        type: mongoose.Types.Decimal128,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Paycheck = mongoose.model('Paycheck', paycheckSchema);