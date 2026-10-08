const express = require("express");
const {
  registerUser,
  getAllUsers,
  getOneUser,
  updateUser,
} = require("../Controllers/userController");
const userrouter = express.Router();

userrouter.get("/", getAllUsers);

userrouter.post("/signup", registerUser);

userrouter.get("/users/:id", getOneUser);

userrouter.put("/users/:id", updateUser);

module.exports = userrouter;
