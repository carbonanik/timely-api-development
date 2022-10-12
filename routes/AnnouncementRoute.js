const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const announcementController = require('../controllers/AnnouncementController');

router.post('/add', userAuth, announcementController.addAnnouncement);
router.get('/', userAuth, announcementController.getAnnouncement);
router.delete('/:id', userAuth, announcementController.delete);

module.exports = router;
