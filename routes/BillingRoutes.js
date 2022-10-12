const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const billingController = require('../controllers/StripeController');

router.post('/add-card', userAuth, billingController.addCard);

module.exports = router;
