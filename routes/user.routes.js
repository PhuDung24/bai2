var express = require('express');
var router = express.Router();
var validate = require('../validate/user.validate');

var controller = require('../controllers/user.controller');

router.get('/',controller.index);

router.get('/create',controller.create);

router.post('/create',validate.postCreate ,controller.postCreate);

router.get('/:id',controller.get);

router.get('/search',controller.search);

module.exports = router;