var express = require('express');
var router = express.Router();
var { user } = require('../models/index')

/* GET home page. */
router.post('/users', async function (req, res, next) {
  const { userName, passWord, role, name } = req.body;
  try {
    const userCheck = await user.findOne({ where:{userName: userName} })
  if (userCheck) {
   return res.status(409).json({ "message": "User already exists. Please choose a different email or username." })
  }
  else {
    const response = await user.create({ userName, passWord, role, name })
   return res.status(200).json({ "message": "User Created successfully" })
  }
    
  } catch (error) {
    return res.status(500).json({ "message": "Internal server error." });

  }
  


});

module.exports = router;
