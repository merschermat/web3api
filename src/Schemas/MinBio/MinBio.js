const mongoose = require('mongoose')

// Create Link schema 
const minBioSchema = mongoose.Schema({
    username: String,
    text: String,
    created: Date,
    removed: Boolean
});
var MinBio = mongoose.model('minBios', minBioSchema);

module.exports.MinBio = MinBio;