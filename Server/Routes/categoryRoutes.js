const express = require('express');
const router = express.Router();
const {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} = require('../Controllers/categoryController');
const authenticate = require('../Controllers/authentication');


router.post('/', authenticate, addCategory);

router.get('/', authenticate, getCategories);

router.put('/:id', authenticate, updateCategory);

router.delete('/:id', authenticate, deleteCategory);

module.exports = router;
