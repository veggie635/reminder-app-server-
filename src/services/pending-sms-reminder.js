const Reminder = require('../models/sms-reminder');
const terminatePendingReminder = require('./terminate-pending-reminder')

function pendingSMSReminder(number, message, time) {
    const reminder = new Reminder({
        number: number,
        message: message,
        time: time,
        status: 'pending'
    });
    console.log(reminder);
    reminder.save();
    setTimeout(() => terminatePendingReminder(number), 600000);
};

module.exports = pendingSMSReminder; 