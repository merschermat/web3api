const mongoose = require('mongoose')

// Create Degree schema 
const degreeSchema = mongoose.Schema({
    username: String,
    institutions:[],
    created: Date,
    removed: Boolean
});
var Degree = mongoose.model('degrees', degreesSchema);

module.exports.Degree = Degree;