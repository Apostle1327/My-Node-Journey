const mongoose = require("mongoose");

const dailyExpensesModel = new mongoose.Schema({
  expenseName: {
    type: String,
    required: true,
  },

  expenseAmount: {
    type: Number,
    required: true,
  },

  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "finalBudget",
    required: true,
  },
});

const dailyExpense = mongoose.model("dailyExpense", dailyExpensesModel);

module.exports = dailyExpense;
