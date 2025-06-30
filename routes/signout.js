const express = require('express');
const router = express.Router();

router.post('/signout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
        path: '/' // ✅ MUST match how it was set
        

  });
  return res.status(200).json({ message: 'Successfully logged out' });
});

module.exports = router;
