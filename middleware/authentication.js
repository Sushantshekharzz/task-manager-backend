const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
  console.log("token",token)

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, process.env.secret_key, (err, auth) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Token expired" });
      } else {
        return res.status(403).json({ message: "Invalid token" });
      }
    }

    // Attach user info to request
    req.user = {
      adminId: auth.id,
      role: auth.role,
      name: auth.name,
      userName: auth.userName
    };
    
    next();
  });
};

module.exports = authentication;
