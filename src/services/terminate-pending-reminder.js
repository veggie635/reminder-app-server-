const Reminder = require('../models/sms-reminder');

function terminatePendingReminder(number) {
    Reminder.findOneAndDelete({number: number, status: 'pending'});
}

module.exports = terminatePendingReminder;