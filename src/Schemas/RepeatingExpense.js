const mongoose = require('mongoose')

// Create expense schema 
const repeatingExpenseSchema = mongoose.Schema({
    name: String,
    dueDate: Date,
    baseValue: Float64Array,r,
    houseID: Number,
    removed: Boolean
});
var RepeatingExpense = mongoose.model('expenses', repeatingExpenseSchema);

module.exports.RepeatingExpense = RepeatingExpense;