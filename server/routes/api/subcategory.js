const express = require('express');
const router = express.Router();

// Subcategory Model
const Subcategory = require('../../models/Subcategory');

// @route   GET api/subcategories
// @desc    Get All Subcategories
// @access  Public
router.get('/', (req, res) => {
    Subcategory.find()
        .populate('category')
        .then(subcategories => res.json(subcategories))
});

// @route   POST api/subcategories
// @desc    Create An Subcategory
// @access  Public
router.post('/', (req, res) => {
    const newSubcategory = new Subcategory({
        name: req.body.name,
        category: req.body.category
    });

    newSubcategory.save()
        .then(subcategory => {
            Category.findOne({ _id: newSubcategory.category }, (err, category) => {
                if (category) {
                    category.subcategories.push(newSubcategory);
                    category.save();

                    res.json(subcategory)
                }
            });
        })
        .catch((err) => res.status(500).json({ err }));
});

// @route   DELETE api/subcategories/:id
// @desc    Delete An Subcategory
// @access  Public
router.delete('/:id', (req, res) => {
    Subcategory.findById(req.params.id)
        .then(subcategory => subcategory.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ err }));
});


module.exports = router;