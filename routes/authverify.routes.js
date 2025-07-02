// routes/verify.js
const express = require('express');
const router = express.Router();
var authVerifyController = require('../controller/auth.controller');
console.log("here entering")

router.get('/', authVerifyController.verifyToken);

module.exports = router;
