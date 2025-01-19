var express = require('express');
var router = express.Router();
var { user } = require('../models/index')
var bcrypt = require('bcrypt')


router.post('/signup', async function (req, res, next) {
  console.log("entering6")
  const { userName, passWord, role, name } = req.body;
  try {
    console.log("entering1")
    const userCheck = await user.findOne({ where: { userName: userName } })
    if (userCheck) {
      console.log("entering4")
      return res.status(409).json({ "message": "User already exists. Please choose a different email or username." })
    }
    else {
      console.log("entering4")
      bcryptPassword = await bcrypt.hash(passWord, 16)
      const response = await user.create({ userName, passWord: bcryptPassword, role, name })
      return res.status(200).json({ "message": "User Created successfully" })
    }

  } catch (error) {
    console.log("entering0")
    return res.status(500).json({ "message": "Internal server error." });
  }
});

module.exports = router;
