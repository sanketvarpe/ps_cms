var express = require('express')
var router = express.Router()
var authController = require('../../controllers/controller/auth');

router.post('/login',authController.loginController);
router.post('/register',authController.registerController);

module.exports = router;