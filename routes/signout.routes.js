const express = require('express');
const router = express.Router();
const signOutController = require('../controller/signout.controller');

router.post('/', signOutController.signOut);

module.exports = router;
