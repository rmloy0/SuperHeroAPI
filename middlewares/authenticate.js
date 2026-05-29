const isAuthenticated = (req, res, next) => {
  console.log('AUTH:', req.isAuthenticated(), req.user);

  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json('Unauthorized');
};

module.exports = {
  isAuthenticated,
};
