const express = require('express');
const router = express.Router();

const MailController = require('../controllers/MailController');

router.post('/sentMail', MailController.SendMail);

module.exports = router;