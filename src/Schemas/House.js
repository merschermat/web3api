const mongoose = require('mongoose')

// Create house schema 
let houseSchema = mongoose.Schema({
    name: String,
    address: String,
    creation: Date,
    color: Object,
    adminID: Number,
    removed: Boolean
});
var House = mongoose.model('houses', houseSchema);

module.exports.House = House;