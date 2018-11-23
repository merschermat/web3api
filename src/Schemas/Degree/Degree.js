const mongoose = require('mongoose')

// Create Degree schema 
const degreeSchema = mongoose.Schema({
    username: String,
    institutions: String,
    created: Date,
    removed: Boolean
});
var Degree = mongoose.model('degrees', degreeSchema);

module.exports.Degree = Degree;