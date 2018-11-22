const mongoose = require('mongoose')

// Create photo schema 
const photoSchema = mongoose.Schema({
    username: String,
    photo: String,
    created: Date,
    removed: Boolean
});
var Photo = mongoose.model('photos', photosSchema);

module.exports.Photo = Photo;