const mongoose = require('mongoose')

// Create user schema 
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    token: Date,
    houseID: Number,
    removed: Boolean
});
var User = mongoose.model('users', userSchema);

module.exports.User = User;