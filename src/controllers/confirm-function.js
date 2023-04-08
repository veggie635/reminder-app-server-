const confirmSMSReminder = require('../services/confirm-sms-reminder');
const pendingSMSReminder = require('../services/pending-sms-reminder');

async function confirmFunction(data) {
    pendingSMSReminder(data.number, data.message, data.time);
    await confirmSMSReminder(data.number);
}

module.exports = confirmFunction;