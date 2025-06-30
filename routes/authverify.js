// routes/verify.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/auth/verify', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    return res.status(200).json({
      message: 'Authorized',
      role: decoded.role,
      name: decoded.name,
    });
  });
});

module.exports = router;
