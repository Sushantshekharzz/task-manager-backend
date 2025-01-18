var express = require('express')
var app = express();
var { user } = require('../models/index')
var jsonwebtoken = require('jsonwebtoken')
require('dotenv').config();


var bcrypt = require('bcrypt')


app.use("/signin", async (req, res) => {
    const { userName, passWord } = req.body;
    try {
        const userCheck = await user.findOne({ where: { userName: userName } })
        if (!userCheck) {
            return res.status(404).json({ "message": "User not found" })
        }
        else {
            const verify = await bcrypt.compare(passWord, userCheck.passWord)
            if (verify) {
                const role = userCheck.role
                var token = jsonwebtoken.sign({ userName }, process.env.secret_key, { 'expiresIn': '1h' })
                return res.status(200).json({ "message": "Sucessfully Login", token: token, role: role })
            }
            else {
                return res.status(401).json({ "message": "Unauthorized" })
            }
        }
    } catch (error) {
        return res.status(500).json({ "message": "Internal server error." });
    }
})

module.exports = app