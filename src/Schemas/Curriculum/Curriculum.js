const mongoose = require('mongoose')

// Create curriculum schema 
const curriculumSchema = mongoose.Schema({
    username: String,
    text: String,
    created: Date,
    removed: Boolean
});
var Curriculum = mongoose.model('curriculums', curriculumSchema);

module.exports.Curriculum = Curriculum;