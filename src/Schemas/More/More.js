const mongoose = require('mongoose')

// Create more schema 
const moreSchema = mongoose.Schema({
    username: String,
    text: String,
    created: Date,
    removed: Boolean
});
var More = mongoose.model('mores', moreSchema);

module.exports.More = More;