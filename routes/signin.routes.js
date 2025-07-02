var express = require('express')
var app = express();
var signInController = require('../controller/signin.controller')

app.post("/", signInController.signIn)

module.exports = app