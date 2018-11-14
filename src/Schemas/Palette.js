const mongoose = require('mongoose')

// Create palette schema 
const paletteSchema = mongoose.Schema({
    primary: String,
    onPrimary: String,
    secondary: String,
    onSecondary: String
});
var Palette = mongoose.model('palettes', paletteSchema);

module.exports.Palette = Palette;