const Reminder = require('../models/sms-reminder');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

async function sendReminders() {
    setInterval(() => {
        Reminder.findAll({time: now}, (reminders) => {
            reminders.forEach((reminder) => {
                client.messages
                    .create({
                        body: reminder.message,
                        from: myNumber,
                        to: reminder.number
                    })
                    .then(message => console.log(message.sid));
            });
        });
    }, 1000);
}

module.exports = sendReminders;