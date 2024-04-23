// import mongoose and Schema package
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating User Schema
const userSchema = new Schema({
    // Keeping the type, require and unique terms type and giving (true or false) values
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})
// Create model of User Schema and export it
const User = mongoose.model("user", userSchema);
module.exports = User;