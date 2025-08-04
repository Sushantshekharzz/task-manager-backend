// routes/verify.js
const express = require('express');
const router = express.Router();
var refreshController = require('../controller/refresh.controller');

router.get('/refresh', refreshController.refreshAccessToken);

module.exports = router;
