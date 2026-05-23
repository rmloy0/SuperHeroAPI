const express = require('express');
const router = express.Router();

const heroRoutes = require('./superheroRoute');
const villainRoutes = require('./villainRoute');

router.get('/', (req, res) => {
  res.send('Welcome to Super Hero Project API');
});

router.use('/superhero', heroRoutes);
router.use('/supervillain', villainRoutes);

module.exports = router;
