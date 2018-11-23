const mongoose = require('mongoose')

// Create portfolio schema 
const portfolioSchema = mongoose.Schema({
    username: String,
    title: String,
    date: Date,
    desc: String,
    created: Date,
    removed: Boolean
});
var Portfolio = mongoose.model('portfolios', portfolioSchema);

module.exports.Portfolio = Portfolio;