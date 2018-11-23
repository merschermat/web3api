const mongoose = require('mongoose')

// Create idioms schema 
const idiomSchema = mongoose.Schema({
    username: String,
    Idioms: String,
    Nivel : String,
    created: Date,
    removed: Boolean
});
var Idioms = mongoose.model('idioms', idiomSchema);

module.exports.Idioms = Idioms;