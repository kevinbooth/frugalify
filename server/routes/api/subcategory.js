const express = require('express');
const router = express.Router();

// Subcategory Model
const Subcategory = require('../../models/Subcategory');

// @route   GET api/Subcategories
// @desc    Get All Subcategories
// @access  Public
router.get('/', (req, res) => {
    Subcategory.find()
        .populate('Category')
        .then(subcategories => res.json(subcategories))
});

// @route   POST api/Subcategories
// @desc    Create An Subcategory
// @access  Public
router.post('/', (req, res) => {
    const newSubcategory = new Subcategory({
        name: req.body.name
    });

    newSubcategory.save()
        .then(subcategory => res.json(subcategory));
});

// @route   DELETE api/Subcategories
// @desc    Delete An Subcategory
// @access  Public
router.delete('/:id', (req, res) => {
    Subcategory.findById(req.params.id)
        .then(subcategory => subcategory.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;