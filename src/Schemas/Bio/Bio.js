const mongoose = require('mongoose')

// Create bio schema 
const bioSchema = mongoose.Schema({
    username: String,
    text: String,
    created: Date,
    removed: Boolean
});
var Bio = mongoose.model('bios', bioSchema);

module.exports.Bio = Bio;