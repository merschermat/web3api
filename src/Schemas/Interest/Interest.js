const mongoose = require('mongoose')

// Create interest schema 
const interestSchema = mongoose.Schema({
    username: String,
    interests: String,
    created: Date,
    removed: Boolean
});
var Interest = mongoose.model('interests', interestSchema);

module.exports.Interest = Interest;