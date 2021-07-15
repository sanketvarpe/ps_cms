var express = require('express')
var router = express.Router()
var homeController = require('../../controllers/controller/home');

router.get('/home',homeController.homeController);

module.exports = router;