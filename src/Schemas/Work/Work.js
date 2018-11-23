const mongoose = require('mongoose')

// Create work schema 
const workSchema = mongoose.Schema({
    username: String,
    text: String,
    created: Date,
    removed: Boolean
});
var Work = mongoose.model('works', workSchema);

module.exports.Work = Work;