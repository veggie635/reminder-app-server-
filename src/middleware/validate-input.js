const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const Reminder = require('../models/sms-reminder');

function validateInput(req, res, next) {
    client.lookups.v2.phoneNumbers(req.body.number)
        .fetch()
        .then(phone_number => {
            if (phone_number.valid === false) {
                console.log(phone_number.validationErrors);
                res.send('invalid number');
            } else if (Reminder.exists({number: req.body.number, status: 'pending'})) {
                res.send('this number already has a pending reminder')
            } else {
                next();
            }
        });
}

module.exports = validateInput;