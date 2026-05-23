const express = require('express');
const router = express.Router();

const hero = require('../controllers/superHeroController');
const validateSuperHero = require('../middlewares/validateHeroes');

router.get('/', (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']
  hero.getAllHeroes(req, res, next);
});

router.get('/:object_id', (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']

  hero.getHeroById(req, res, next);
});

router.post('/', validateSuperHero, (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']

  hero.createHero(req, res, next);
});
router.put('/:object_id', (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']
  (validateSuperHero, hero.updateHero(req, res, next));
});

router.delete('/:object_id', (req, res, next) => {
  // #swagger.tags = ['SuperHeroes']

  hero.deleteHero(req, res, next);
});

module.exports = router;
