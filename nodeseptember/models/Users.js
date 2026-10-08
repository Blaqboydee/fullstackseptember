const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 20, minlength: 3 },
  email: { type: String, unique: true, required: true },
  age: Number,
  // isStudent: Boolean,
  password: { type: String, required: true, minlength: 6 },
});

const User = mongoose.model("Students_Collection", userSchema);

module.exports = User;