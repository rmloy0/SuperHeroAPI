const express = require('express');
const router = express.Router();

const passport = require('passport');

const heroRoutes = require('./superHeroRoute');
const villainRoutes = require('./villainRoute');

// router.get('/', (req, res) => {
//   res.send('Welcome to Super Hero Project API');
// });

router.use('/superhero', heroRoutes);
router.use('/supervillain', villainRoutes);

router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
