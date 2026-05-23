const express = require('express');
const router = express.Router();

const validateVillain = require('../middlewares/validateVillains');
const villain = require('../controllers/villainController');

router.get('/', (req, res, next) => {
  // #swagger.tags = ['Villains']
  // #swagger.description = 'Get all villains'

  villain.getAllVillains(req, res, next);
});

router.get('/:object_id', (req, res, next) => {
  // #swagger.tags = ['Villains']
  // #swagger.description = 'Get  villain'

  villain.getVillainById(req, res, next);
});

router.post(
  '/',
  validateVillain,
  // #swagger.tags = ['Villains']
  (req, res, next) => {
    villain.createVillain(req, res, next);
  },
);

router.put(
  '/:object_id',
  // #swagger.tags = ['Villains']
  // #swagger.description = 'update  villain'

  validateVillain,
  (req, res, next) => {
    villain.updateVillain(req, res, next);
  },
);

router.delete('/:object_id', (req, res, next) => {
  // #swagger.tags = ['Villains']
  //
  villain.deleteVillain(req, res, next);
});
module.exports = router;
