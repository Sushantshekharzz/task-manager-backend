const jwt = require('jsonwebtoken');


const refreshAccessToken = (req, res) => {
  const token = req.cookies.refreshToken;
  try {
    
 
  if (!token) return res.status(401).json({ message: 'No refresh token' });

  jwt.verify(token, process.env.secret_key, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid refresh token' });

    const newAccessToken = jwt.sign({ id: user.id, name: user.name, role: user.role }, process.env.secret_key, {
      expiresIn: '15m',
    });

    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 15 * 60 * 1000,
    });

    return res.status(200).json({ message: 'Access token refreshed' });
  });
   } catch (error) {
    console.log("eeee",error)
    
  }
};

module.exports = { refreshAccessToken };