const mongoose = require('mongoose')

// Create idioms schema 
const idiomSchema = mongoose.Schema({
    username: String,
    Idioms:[],
    created: Date,
    removed: Boolean
});
var Idioms = mongoose.model('idioms', idiomSchema);

module.exports.Idioms = Idioms;