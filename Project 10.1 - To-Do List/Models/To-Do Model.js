const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  title: { type: String, require: true },
  done: { type: Boolean, default: false },
});

const toDoTasks = mongoose.model("Task", toDoSchema);

module.exports = toDoTasks;
