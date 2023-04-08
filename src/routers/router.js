const express = require('express');
const router = express.Router();
const validateInput = require('../middleware/validate-input');
const confirmFunction = require('../controllers/confirm-function');

router.use(express.urlencoded({extended: true}));
router.use(validateInput);

router.post('/', validateInput, (req, res) => {
    console.log("Request received. Awaiting Confirmation...");
    confirmFunction(req.body);
    res.send('success');
}); 

module.exports = router;