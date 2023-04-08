const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

function confirmSMSReminder(number) {
    client.messages
        .create({
            body: "Reply 'YES' to schedule your reminder.",
            from: myNumber,
            to: number
        })
        .then(message => console.log(message.sid));
}

module.exports = confirmSMSReminder; 