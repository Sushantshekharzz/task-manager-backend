var express = require('express');
var router = express.Router();
var signUpController = require('../controller/signup.controller');


router.post('/', signUpController.signUp);

module.exports = router;
