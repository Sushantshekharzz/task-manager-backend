const jwt = require('jsonwebtoken');

const refreshAccessToken = (req, res) => {
  const token = req.cookies.refreshToken; // refresh token in cookie
  try {
    if (!token) return res.status(401).json({ message: 'No refresh token' });

    jwt.verify(token, process.env.secret_key, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid refresh token' });

      const newAccessToken = jwt.sign(
        { id: user.id, name: user.name, role: user.role },
        process.env.secret_key,
        { expiresIn: '15m' }
      );

      // ✅ Send access token in JSON instead of cookie
      return res.status(200).json({
        status: 200,
        accessToken: newAccessToken,
        user: { id: user.id, name: user.name, role: user.role }
      });
    });
  } catch (error) {
    console.log("Error in refresh token", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { refreshAccessToken };
