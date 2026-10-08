const User = require('../models/Users')

const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    
    const createdUser = await User.create(req.body);

    if (createdUser) {
      return res.status(201).json({
        message: "user created successfully",
        user: createdUser
      })
    }

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "failed to register user",
      error: error.message
    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
  } catch (error) {
    res.send(error);
  }
}

const getOneUser = async (req, res) => {
  try {
    const theUser = await User.findById(req.params.id);

    if (!theUser) {
      return res.status(404).send("User not found");
    }

    res.send(theUser);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
}

const updateUser = async (req, res) => {
  try {
  
    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});


    if (!updatedUser) {
      return res.status(404).send("User to be updated not found");
    }

    res.send(updatedUser);
  } catch (error) {
    return res.status(500).send("An error occcured:" + error.message);
  }
}



module.exports = {getAllUsers, registerUser, getOneUser, updateUser};