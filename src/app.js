const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routers/router');
const sms = require('./routers/sms');
const sendReminders = require('./services/send-reminders');

const port = process.env.PORT;
const dbServer = process.env.DB_SERVER;

mongoose.connect(dbServer);

app.use(sendReminders);
app.use('/', router);
app.use('/sms', sms)

app.listen(port, () => console.log("app is running"));