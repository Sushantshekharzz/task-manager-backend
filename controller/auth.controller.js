const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
    console.log("eeeee")
    console.log("rrrr",req)
    const token = req.cookies.token;
    console.log("rrrr",token)

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    return res.status(200).json({
      role: decoded.role,
      name: decoded.name,
    });
  });


}

module.exports = {verifyToken};