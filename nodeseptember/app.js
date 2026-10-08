const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { error } = require("console");
const cors = require('cors')
require("dotenv").config()


const Connect = require('./DbConfig/Db.connect')

const userrouter = require('./Routes/userRoutes')


//create an instance of the express application
const app = express();
app.set("view engine", "ejs");

app.use(cors()) 
app.use(express.json()) //middleware for thunderclient parsing
app.use(express.urlencoded({ extended: true })); //middleware
app.use("/users", userrouter)


// app.get("/", (req, res) => {
//   res.send("Homepage")
// })




const name = "Taiwo";
const role = "Admin";
const isAdmin = true;

const studentsList = ["Adekoya", "Moyomade", "Adedeji", "Taiwo"];

app.get("/", (req, res) => {
  res.render("home", { name, role, isAdmin, studentsList });
});

const isOnline = true;

app.get("/profile", (req, res) => {
  res.render("profile", { name, isOnline });
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/user", (req, res) => {
  res.send({ name: "Ada", class: "Nodejs" });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  console.log(`User id ${req.params.id}`);
});

app.get("/search", (req, res) => {
  console.log(`you searched for ${req.query.term}`);
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/thank-you", (req, res) => {
  res.send("Thank you for subscribing");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  // res.send(`Thanks for submitting, ${req.body.username}`)

  res.redirect("/thank-you");
});

app.post("/enter", (req, res) => {
  // const username = req.body.username;
  const { email, username } = req.body;
  res.render("welcome", { username });
});

let todos = [];

app.get("/todo", (req, res) => {
  res.render("todo", { todos });
});

app.post("/addTodo", (req, res) => {
  console.log(req.body);
  const { todo } = req.body;

  todos.push(todo);

  console.log(todos);

  res.redirect("/todo");
});

app.post("/deleteTodo", (req, res) => {
  console.log("attempting to delete");
  console.log(req.body);
  const { index } = req.body;
  console.log(index);

  todos.splice(index, 1);

  res.redirect("/todo");
});

app.get("/editTodo/:id", (req, res) => {
  const editIndex = req.params.id;
  const theTodo = todos[editIndex];
  res.render("edit", { editIndex, theTodo });

  console.log(req.params);
});







app.get("/oneuser", async (req, res) => {
  try {
    const thatParticularUser = await User.findOne({
      email: "adeoluwa@gmail.com",
    });

    if (!thatParticularUser) {
      res.status(404).send("user not found");
    }

    res.send(thatParticularUser);
  } catch (error) {
    console.log(error);

    return res.status(500).send("Internal server error");
  }
});




app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)

    if (!deletedUser) {
      return res.status(404).send("User not found")
    }

    return res.status(200).send("User deleted successfully")

  } catch (error) {
    return res.status(500).send("An error occured:" + error.message)
  }
})



Connect(); //connect to the database

// define the PORt that your application listens on
const PORT = 3000;

//start your server
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

//  Modify the profile route so it also passes an isOnline boolean.

//  In the template, use an <%if %> block to display "Online" in green text if true, or "Offline" if false.
