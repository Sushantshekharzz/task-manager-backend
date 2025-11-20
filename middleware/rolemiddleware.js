 const authorizeRoles = (...roles) => (req, res, next) => {
  try {
    console.log("rrrrr",roles)
    console.log("kkkk",req.user.role)
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 403,
        message: "You do not have permission to access this resource"
      });
    }
    next();
  } catch (err) {
    console.error("RBAC authorization error:", err);
    return res.status(500).json({
      status: 500,
      message: "Internal server error"
    });
  }
};

module.exports = authorizeRoles;
