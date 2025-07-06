const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/moviePage");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Database has been successfully Connected!");
});

module.exports = db;
