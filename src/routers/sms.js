const express = require('express');
const sms = express.Router()
const createSMSReminder = require("../services/create-sms-reminder");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

sms.use(express.urlencoded({extended: true}));

sms.post('/sms', async (req, res) => {
    console.log(req);
    if (req.Body === 'YES') {
        let status = await createSMSReminder(req.From);
        await client.messages
            .create({
                body: status,
                from: myNumber,
                to: number
            })
            .then(message => console.log(message.sid));
    } else {
        client.messages
            .create({
                body: "Get started at this link: ______.",
                from: myNumber,
                to: number
            })
            .then(message => console.log(message.sid));
    }
    res.end();
});

module.exports = sms;