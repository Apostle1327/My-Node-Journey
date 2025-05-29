const mongoose = require("mongoose");

const crudModel = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  eMail: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  hobbies: {
    type: Array,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("user", crudModel);

module.exports = users;
