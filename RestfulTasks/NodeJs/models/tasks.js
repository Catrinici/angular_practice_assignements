const mongoose = require('mongoose');

var Tasks = mongoose.model('Tasks', {
    title: { type: String },
    description: { type: String }
})

module.exports = { Tasks }