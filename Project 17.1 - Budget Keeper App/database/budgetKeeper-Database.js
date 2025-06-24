const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/budgetKeeper");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database has successfully connected!");
});

module.exports = db;
