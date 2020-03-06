const express = require('express');
const router = express.Router();

// Category Model
const Category = require('../../models/Category');

// @route   GET api/Categories
// @desc    Get All Categorys
// @access  Public
router.get('/', (req, res) => {
    Category.find()
        .then(categories => res.json(categories))
});

// @route   POST api/Categories
// @desc    Create An Category
// @access  Public
router.post('/', (req, res) => {
    const newCategory = new Category({
        name: req.body.name
    });

    newCategory.save()
        .then(category => res.json(category));
});

// @route   DELETE api/Categories
// @desc    Delete An Category
// @access  Public
router.delete('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then(category => category.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;