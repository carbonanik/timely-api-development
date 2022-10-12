const express = require('express');
const router = express.Router();

const PaymentController = require('../controllers/PaymentController');

router.post('/add', PaymentController.Payment);

module.exports = router;
