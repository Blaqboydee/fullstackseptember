const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;

const Connect = () => {

    
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => console.log(error));
}



  module.exports = Connect;