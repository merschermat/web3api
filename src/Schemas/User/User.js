const mongoose = require('mongoose')

// Create user schema 
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    created: Date,
    removed: Boolean
});
var User = mongoose.model('users', userSchema);

module.exports.User = User;