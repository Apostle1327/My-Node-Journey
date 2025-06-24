const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 8002;

const app = express();

const db = require("./database/budgetKeeper-Database");
const finalBudget = require("./models/budgetKeeper-Model");
const dailyExpense = require("./models/dailyExpenses-Model");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/icons",
  express.static(path.join(__dirname, "node_modules/bootstrap-icons/font"))
);
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const totalBudget = await finalBudget.find();
    const totalExpense = await dailyExpense.find().populate("budgetId");

    const expensesByBudget = {};
    totalExpense.forEach((expense) => {
      if (!expense.budgetId) {
        return;
      }
      const budgetId = expense.budgetId._id.toString();
      if (!expensesByBudget[budgetId]) {
        expensesByBudget[budgetId] = [];
      }
      expensesByBudget[budgetId].push(expense);
    });

    return res.render("index", { totalBudget, expensesByBudget });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.post("/addBudget", async (req, res) => {
  try {
    const { budgetName, initialBudget } = req.body;
    const newBudget = new finalBudget({
      budgetName,
      finalBudget: initialBudget || 0,
    });
    await newBudget.save();

    return res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.post("/updateBudget/:id", async (req, res) => {
  try {
    const budgetDoc = await finalBudget.findById(req.params.id);
    if (!budgetDoc) {
      return res.status(404).send("No budget found to update!");
    }

    const delta = parseFloat(req.body.finalBudget);
    if (isNaN(delta)) {
      return res.status(400).send("Invalid budget amount!");
    }

    budgetDoc.finalBudget += delta;
    await budgetDoc.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.post("/deleteBudget/:id", async (req, res) => {
  try {
    const budgetDoc = await finalBudget.findById(req.params.id);
    if (!budgetDoc) {
      return res.status(404).send("No budget found to delete!");
    }

    await dailyExpense.deleteMany({ budgetId: req.params.id });

    await finalBudget.deleteOne({ _id: req.params.id });

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.post("/addExpense", async (req, res) => {
  try {
    const { expenseName, expenseAmount, budgetId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(budgetId)) {
      return res.status(400).send("Invalid budget ID!");
    }

    const budget = await finalBudget.findById(budgetId);
    if (!budget) {
      return res.status(404).send("Budget not found!");
    }

    const totalExpenses = await dailyExpense
      .find({ budgetId })
      .then((expenses) =>
        expenses.reduce((sum, expense) => sum + expense.expenseAmount, 0)
      );

    const newExpenseAmount = parseFloat(expenseAmount);
    if (isNaN(newExpenseAmount) || newExpenseAmount <= 0) {
      return res.status(400).send("Invalid expense amount!");
    }

    if (totalExpenses + newExpenseAmount > budget.finalBudget) {
      return res
        .status(400)
        .send("Expense amount exceeds the remaining budget!");
    }

    const newExpense = new dailyExpense({
      expenseName,
      expenseAmount: newExpenseAmount,
      budgetId,
    });
    await newExpense.save();

    budget.finalBudget -= newExpenseAmount;
    await budget.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.post("/deleteExpense/:id", async (req, res) => {
  try {
    const expenseDoc = await dailyExpense.findById(req.params.id);
    if (!expenseDoc) {
      return res.status(404).send("No expense found to delete!");
    }

    const budget = await finalBudget.findById(expenseDoc.budgetId);
    if (!budget) {
      return res.status(404).send("Budget not found!");
    }

    budget.finalBudget += expenseDoc.expenseAmount;
    await budget.save();

    await dailyExpense.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error!");
  }
});

app.listen(port, (err) => {
  err
    ? console.error(err)
    : console.log(`🚀 Server is Running on http://localhost:${port}`);
});
