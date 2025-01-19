var express = require('express');
var router = express.Router();
var { user } = require('../models/index')
var bcrypt = require('bcrypt')
var authentication = require('../middleware/authentication')
router.post('/user',authentication      , async function (req, res, next) {
    console.log("rrr",req.body)
  const { userName, passWord, role, name, id } = req.body;
  try {
    const userCheck = await user.findOne({ where: { userName: userName } })
    if (userCheck) {
        console.log("workinggugfki")
      return res.status(409).json({ "message": "User already exists. Please choose a different email or username." })
    }
    else {
      bcryptPassword = await bcrypt.hash(passWord, 16)
      const response = await user.create({ userName, passWord: bcryptPassword, role, name,  adminId:id})
      return res.status(200).json({ "message": "User Created successfully" })
    }

  } catch (error) {
    return res.status(500).json({ "message": "Internal server error." });
  }
});

module.exports = router;
