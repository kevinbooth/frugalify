const express = require('express');
const router = express.Router();

// Expense Model
const Expense = require('../../models/Expense');

// @route   GET api/expense
// @desc    Get All Expenses
// @access  Public
router.get('/', (req, res) => {
    Expense.find()
        .sort({ date: -1 })
        .then(expenses => res.json(expenses))
});

// @route   POST api/Expense
// @desc    Create An Expense
// @access  Public
router.post('/', (req, res) => {
    const newExpense = new Expense({
        name: req.body.name
    });

    newExpense.save()
        .then(expense => res.json(expense));
});

// @route   DELETE api/expense/:id
// @desc    Delete An Expense
// @access  Public
router.delete('/:id', (req, res) => {
    Expense.findById(req.params.id)
        .then(expense => expense.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;