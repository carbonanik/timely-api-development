const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const companyController = require('../controllers/CompanyController');

router.post('/add', userAuth, companyController.add);
router.get('/', userAuth, companyController.getCompany);
router.get('/:id', userAuth, companyController.findCompany);
module.exports = router;
