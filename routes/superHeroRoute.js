const express = require('express');
const router = express.Router();

const hero = require('../controllers/superHeroController');

const validateSuperHero = require('../middlewares/validateHeroes');

const { isAuthenticated } = require('../middlewares/authenticate');

console.log('ROUTE FILE LOADED');

console.log('validateSuperHero:', typeof validateSuperHero);
console.log('isAuthenticated:', typeof isAuthenticated);

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
    console.log('post ROUTE HIT');
    hero.createHero(req, res, next);
  },
);

router.put(
  '/:object_id',
  isAuthenticated,
  validateSuperHero,
  (req, res, next) => {
    // #swagger.tags = ['SuperHeroes']
    console.log('put ROUTE HIT');
    hero.updateHero(req, res, next);
  },
);

router.delete('/:object_id', isAuthenticated, (req, res, next) => {
  console.log('DELETE ROUTE HIT');
  // #swagger.tags = ['SuperHeroes']
  hero.deleteHero(req, res, next);
});

module.exports = router;
