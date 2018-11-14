const mongoose = require('mongoose')

// Create expense schema 
const expenseSchema = mongoose.Schema({
    name: String,
    value: Float64Array,
    useId: Number,
    assignedUserID: Number,
    payments: Array,
    dueDate: Date,
    repeatingExpenseID: Number,
    houseID: Number,
    removed: Boolean
});
var Expense = mongoose.model('expenses', expenseSchema);

module.exports.Expense = Expense;