const isAuthenticated = (req, res, next) => {
  console.log('SESSION USER:', req.session.user);

  if (!req.session.user) {
    return res.status(401).json('Unauthorized');
  }
  next();
};

module.exports = {
  isAuthenticated,
};
