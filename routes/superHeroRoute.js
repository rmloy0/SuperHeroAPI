const express = require('express');
const router = express.Router();

const hero = require('../controllers/superHeroController');

const validateSuperHero = require('../middlewares/validateHeroes');

const { isAuthenticated } = require('../middlewares/authenticate');

router.get('/', (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']
  hero.getAllHeroes(req, res, next);
});

router.get('/:object_id', (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']
  hero.getHeroById(req, res, next);
});

router.post(
  '/',

  isAuthenticated,
  validateSuperHero,
  (req, res, next) => {
    // #swagger.tags = ['SuperHeroes']
    hero.createHero(req, res, next);
  },
);

router.put(
  '/:object_id',
  isAuthenticated,
  validateSuperHero,
  (req, res, next) => {
    // #swagger.tags = ['SuperHeroes']
    hero.updateHero(req, res, next);
  },
);

router.delete('/:object_id', isAuthenticated, (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']
  hero.deleteHero(req, res, next);
});

module.exports = router;
