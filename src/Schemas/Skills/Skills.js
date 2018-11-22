const mongoose = require('mongoose')

// Create skills schema 
const skillsSchema = mongoose.Schema({
    username: String,
    skills:[],
    created: Date,
    removed: Boolean
});
var Skills = mongoose.model('skills', skillsSchema);

module.exports.Skills = Skills;