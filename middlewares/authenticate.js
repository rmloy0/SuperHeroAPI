const isAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json('Unauthorized');
  }
  next();
};

module.exports = {
  isAuthenticated,
};
