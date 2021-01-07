const mongoose = require('mongoose');

// user schema
const userSchema =  new mongoose.Schema({
    // _id:Number,
    username:String,
    password:String
});

const User = mongoose.model("User", userSchema);

module.exports = User;

