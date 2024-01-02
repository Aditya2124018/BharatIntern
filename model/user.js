const mongoose = require("mongoose")
const userData = new mongoose.Schema({
    Email:{
        type:String
     },
     Phone:{
        type:String
     },
     Name:{
      type:String
   },
   Address:{
      type:String
   }
})
const User = mongoose.model("User", userData)
module.exports = User;