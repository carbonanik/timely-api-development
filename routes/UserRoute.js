const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/Auth');

const userController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');

router.post('/', userController.add);
router.post('/addEmployee', userAuth, userController.addEmployee);
router.get('/find/:id', userAuth, userController.getUser);
router.put('/', userAuth, userController.update);
router.delete('/', userAuth, userController.delete);
router.post('/login', authController.login);
router.get('/refresh-token', userAuth, authController.refreshToken);
router.post('/request-reset', authController.requesPasswordReset);
router.post('/reset-password', authController.resetPassword);
router.post('/change-password', userAuth, authController.changePassword);
router.get('/verify/:token', userController.verifyUser);
router.get('/invite', userAuth, userController.inviteEmployee);
router.get('/list', userAuth, userController.getUsers);
router.post('/register-employee', userController.registerEmployee);
router.post('/promote-user', userAuth, userController.makeManger);
module.exports = router;
