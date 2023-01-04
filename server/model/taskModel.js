const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    title: {type:String, required:true}
})

const task = mongoose.model('task',taskSchema)

module.exports = task;
