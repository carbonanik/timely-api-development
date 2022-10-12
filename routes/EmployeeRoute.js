const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const employeeController = require('../controllers/EmployeeController');

router.post('/add', userAuth, employeeController.add);

module.exports = router;
