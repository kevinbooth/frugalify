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
        .catch((err) => res.status(500).json({ err }));
});

// @route   GET api/expense/:year/:month
// @desc    Get Expenses by year and month
// @access  Public
router.get('/:year/:month', (req, res) => {
    Expense.find({ 
            date:  { 
                "$gte": new Date(req.params.year, req.params.month - 1, 1), 
                "$lte": new Date(req.params.year, req.params.month, 0) 
            } 
        })
        .sort({ date: -1 })
        .then(expenses => res.json(expenses))
        .catch((err) => res.status(500).json({ err }));
});

// @route   POST api/Expense
// @desc    Create An Expense
// @access  Public
router.post('/', (req, res) => {
    const newExpense = new Expense({
        planned: req.body.planned,
        actual: req.body.actual,
        subcategory: req.body.subcategory,
        date: req.body.date,
    });

    newExpense.save()
        .then(expense => {
            Subcategory.findOne({ _id: newExpense.subcategory }, (err, subcategory) => {
                if (subcategory) {
                    subcategory.expenses.push(newExpense);
                    subcategory.save();

                    res.json(expense)
                }
            });
        })
        .catch((err) => res.status(500).json({ err }));
});

// @route   DELETE api/expense/:id
// @desc    Delete An Expense
// @access  Public
router.delete('/:id', (req, res) => {
    Expense.findById(req.params.id)
        .then(expense => expense.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ err }));
});


module.exports = router;