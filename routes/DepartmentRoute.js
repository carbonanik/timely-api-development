const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const departmentController = require('../controllers/DepartmentController');

router.post('/add', userAuth, departmentController.addDepartment);
router.get('/', userAuth, departmentController.getDepartment);
router.delete('/:id', userAuth, departmentController.delete);
router.put('/:id', userAuth, departmentController.update);

module.exports = router;
