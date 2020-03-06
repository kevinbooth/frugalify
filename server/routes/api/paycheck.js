const express = require('express');
const router = express.Router();

// Paycheck Model
const Paycheck = require('../../models/Paycheck');

// @route   GET api/Paychecks
// @desc    Get All Paychecks
// @access  Public
router.get('/', (req, res) => {
    Paycheck.find()
        .sort({ date: -1 })
        .then(paychecks => res.json(paychecks))
});

// @route   POST api/Paychecks
// @desc    Create An Paycheck
// @access  Public
router.post('/', (req, res) => {
    const newPaycheck = new Paycheck({
        name: req.body.name
    });

    newPaycheck.save()
        .then(paycheck => res.json(paycheck));
});

// @route   DELETE api/Paychecks
// @desc    Delete An Paycheck
// @access  Public
router.delete('/:id', (req, res) => {
    Paycheck.findById(req.params.id)
        .then(paycheck => paycheck.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;