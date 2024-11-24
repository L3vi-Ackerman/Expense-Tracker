const express = require('express');
const router = express.Router();
const {
    addBudget,
    getBudgets,
    getBudgetSummary,
} = require('../Controllers/BudgetController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, addBudget);

router.get('/', authenticate, getBudgets);

router.get('/summary', authenticate, getBudgetSummary);

module.exports = router;
