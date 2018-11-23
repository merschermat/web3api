const mongoose = require('mongoose')

// Create skills schema 
const skillsSchema = mongoose.Schema({
    username: String,
    skills: String,
    created: Date,
    removed: Boolean
});
var Skills = mongoose.model('skills', skillsSchema);

module.exports.Skills = Skills;