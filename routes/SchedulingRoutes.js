const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const schedullingController = require('../controllers/ScheduleController');

router.get('/', userAuth, schedullingController.get);
router.post('/add', userAuth, schedullingController.add);
router.put('/update', userAuth, schedullingController.update);
router.put('/sms', userAuth, schedullingController.smsAlert);

module.exports = router;
