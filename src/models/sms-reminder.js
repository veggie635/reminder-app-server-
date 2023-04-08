const mongoose = require('mongoose');

const smsSchema = new mongoose.Schema({
    number: String,
    message: String,
    time: String,
    status: String
});

const Reminder = new mongoose.model('Reminder', smsSchema);

module.exports = Reminder;