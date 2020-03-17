const express = require('express');
const router = express.Router();

// Paycheck Model
const Paycheck = require('../../models/Paycheck');

// @route   GET api/paychecks
// @desc    Get All Paychecks
// @access  Public
router.get('/', (req, res) => {
    Paycheck.find()
        .sort({ date: -1 })
        .then(paychecks => res.json(paychecks))
});

// @route   GET api/paycheck/:year/:month
// @desc    Get Paychecks by year and month
// @access  Public
router.get('/:year/:month', (req, res) => {
    Paycheck.find({ 
            date:  { 
                "$gte": new Date(req.params.year, req.params.month - 1, 1), 
                "$lte": new Date(req.params.year, req.params.month, 0) 
            } 
        })
        .sort({ date: -1 })
        .then(paychecks => res.json(paychecks))
        .catch((err) => res.status(500).json({ err }));
});

// @route   POST api/paychecks
// @desc    Create A Paycheck
// @access  Public
router.post('/', (req, res) => {
    const newPaycheck = new Paycheck({
        planned: req.body.planned,
        actual: req.body.actual,
        date: req.body.date
    });

    newPaycheck.save()
        .then(paycheck => res.json(paycheck))
        .catch((err) => res.status(500).json({ err }));
});

// @route   DELETE api/paychecks/:id
// @desc    Delete A Paycheck
// @access  Public
router.delete('/:id', (req, res) => {
    Paycheck.findById(req.params.id)
        .then(paycheck => paycheck.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ err }));
});


module.exports = router;