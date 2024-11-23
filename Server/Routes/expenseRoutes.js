const express = require("express");
const router = express.router();
const authenticate = require("../Controllers/authentication");
const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../Controllers/ExpenseController");
router.post("/", authenticate, addExpense);

router.get("/", authenticate, getExpenses);

router.put("/:id", authenticate, updateExpense);

router.delete("/:id", authenticate, deleteExpense);
module.exports = router;
