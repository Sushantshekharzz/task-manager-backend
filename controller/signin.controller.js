var { user } = require('../models/index')
var jsonwebtoken = require('jsonwebtoken')
var bcrypt = require('bcrypt')

const signIn   = async (req,res,next) =>{
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
                const name = userCheck.name
                const id = userCheck.id
                var token = jsonwebtoken.sign({ id, role, name, userName }, process.env.secret_key, { 'expiresIn': '1h' })
                var refreshToken = jsonwebtoken.sign({ id, role, name, userName }, process.env.secret_key, { 'expiresIn': '1m' })

                res.cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
                      path: '/',  // ✅ IMPORTANT

                    maxAge: 24 * 60 * 60 * 1000
                });
                return res.status(200).json({ "message": "Sucessfully Login", token: token, role: role, name: name })
            }
            else {
                return res.status(401).json({ "message": "Unauthorized User" })
            }
        }
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ "message": "Internal server error." });
    }

}
module.exports = {signIn}