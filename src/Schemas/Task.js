const mongoose = require('mongoose')

// Create task schema 
const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    useId: Number,
    assignedUserID: Number,
    dueDate: Date,
    executionDate: Date,
    houseID: Number,
    removed: Boolean
});
var Task = mongoose.model('tasks', taskSchema);

module.exports.Task = Task;