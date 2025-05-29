const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/static-crud");
const db = mongoose.connection;

db.once("open", (error) => {
  error
    ? console.error(error)
    : console.log("Database has Successfully connected!");
});

module.exports = db;
