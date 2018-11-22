const mongoose = require('mongoose')

// Create work schema 
const workSchema = mongoose.Schema({
    username: String,
    work:[],
    created: Date,
    removed: Boolean
});
var Work = mongoose.model('works', worksSchema);

module.exports.Work = Work;