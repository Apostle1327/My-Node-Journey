const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/to-do");
const db = mongoose.connection;

db.once("open", (err) => {
  err ? console.log(err) : console.log("Database has Successfully Connected!");
});

module.exports = db;
