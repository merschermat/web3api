const mongoose = require('mongoose')

// Create Link schema 
const linkSchema = mongoose.Schema({
    username: String,
    Link: String,
    created: Date,
    removed: Boolean
});
var Link = mongoose.model('links', linkSchema);

module.exports.Link = Link;