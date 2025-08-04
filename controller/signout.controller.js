const signOut  = (req,res,next) =>{
      res.clearCookie('accessToken', { path: '/' });
  res.clearCookie('refreshToken', { path: '/' });

  return res.status(200).json({ message: 'Successfully logged out' });

}

module.exports = {signOut}