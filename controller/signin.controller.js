var { user } = require('../models/index');
var jsonwebtoken = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const signIn = async (req, res, next) => {
    const { userName, passWord } = req.body;

    try {
        const userCheck = await user.findOne({ where: { userName } });
        if (!userCheck) {
            return res.status(404).json({ message: "User not found" });
        }

        const verify = await bcrypt.compare(passWord, userCheck.passWord);
        if (!verify) {
            return res.status(401).json({ message: "Unauthorized User" });
        }

        const { id, role, name } = userCheck;

        // Generate tokens
        const accessToken = jsonwebtoken.sign(
            { id, role, name, userName },
            process.env.secret_key,
            { expiresIn: '1m' } // short-lived
        );

        const refreshToken = jsonwebtoken.sign(
            { id, role, name, userName },
            process.env.secret_key,
            { expiresIn: '1d' } // long-lived
        );

        // Send refresh token in HttpOnly cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/', // important
        });

        // Send access token in response body (for memory storage)
        return res.status(200).json({
            message: "Successfully Login",
            accessToken,
            user: { name, role }
        });

    } catch (error) {
        console.error("error", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = { signIn };
