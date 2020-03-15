const express = require('express');
const router = express.Router();

// Transaction Model
const Transaction = require('../../models/Transaction');

// @route   GET api/transactions
// @desc    Get All Transactions
// @access  Public
router.get('/', (req, res) => {
    Transaction.find()
        .sort({ date: -1 })
        .then(transactions => res.json(transactions))
});

// @route   POST api/transactions
// @desc    Create A Transaction
// @access  Public
router.post('/', (req, res) => {
    const newTransaction = new Transaction({
        amount: req.body.amount,
        note: req.body.note,
        date: req.body.date
    });

    newTransaction.save()
        .then(transaction => res.json(transaction))
        .catch((err) => res.status(500).json({ err }));
});

// @route   DELETE api/transactions/:id
// @desc    Delete A Transaction
// @access  Public
router.delete('/:id', (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => transaction.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ err }));
});


module.exports = router;