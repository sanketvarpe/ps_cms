var express = require('express')
var router = express.Router()
const createBillController = require('./../../controllers/controller/department');

router.post('/:dept/create-bill',createBillController.createBillController);

module.exports = router;