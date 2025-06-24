const mongoose = require("mongoose");

const budgetKeeperModel = new mongoose.Schema({
  budgetName: {
    type: String,
    required: true,
  },

  finalBudget: {
    type: Number,
    required: true,
    default: 0,
  },
});

const finalBudget = mongoose.model("finalBudget", budgetKeeperModel);

module.exports = finalBudget;
