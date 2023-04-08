const Reminder = require('../models/sms-reminder');

async function createSMSReminder(number) {
    if (Reminder.exists({number: number, status: 'pending'}) !== null) {
        Reminder.findOneAndUpdate({number: number, status: 'pending'}, {status: 'confirmed'});
        return 'reminder confirmed'
    } else {
        return 'no pending reminder found for this number.';
    }
};

module.exports = createSMSReminder; 