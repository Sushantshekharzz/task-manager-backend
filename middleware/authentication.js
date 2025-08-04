const jwt = require('jsonwebtoken')
require('dotenv').config();



const authentication = (req, res, next) => {
    const token = req.cookies.accessToken
    jwt.verify(token, process.env.secret_key, (err, auth) => {
        if (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(403).json({ message: "Token expired" });
        } else {
            return res.status(403).json({ message: "Invalid token" });
        }
        }
        else {
           req.user = {
            adminId: auth.id,
            role: auth.role,
            name: auth.name,
            userName: auth.userName
        };
            next()
        }
    })

}

module.exports = authentication;