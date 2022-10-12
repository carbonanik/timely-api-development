const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const settingsController = require('../controllers/SettingsController');

router.put('/update', userAuth, settingsController.update);
router.put('/changeplan', userAuth, settingsController.upgrade);

module.exports = router;
