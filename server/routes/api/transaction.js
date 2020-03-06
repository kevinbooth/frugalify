const express = require('express');
const router = express.Router();

// Transaction Model
const Transaction = require('../../models/Transaction');

// @route   GET api/Transactions
// @desc    Get All Transactions
// @access  Public
router.get('/', (req, res) => {
    Transaction.find()
        .sort({ date: -1 })
        .then(transactions => res.json(transactions))
});

// @route   POST api/Transactions
// @desc    Create An Transaction
// @access  Public
router.post('/', (req, res) => {
    const newTransaction = new Transaction({
        name: req.body.name
    });

    newTransaction.save()
        .then(transaction => res.json(transaction));
});

// @route   DELETE api/Transactions
// @desc    Delete An Transaction
// @access  Public
router.delete('/:id', (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => transaction.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;