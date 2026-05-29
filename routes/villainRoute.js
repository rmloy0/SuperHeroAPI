const express = require('express');
const router = express.Router();

const validateVillain = require('../middlewares/validateVillains');
const villain = require('../controllers/villainController');
const { isAuthenticated } = require('../middlewares/authenticate');

router.get('/', (req, res, next) => {
  // #swagger.tags = ['Villains']
  // #swagger.description = 'Get all villains'
  villain.getAllVillains(req, res, next);
});

router.get('/:object_id', (req, res, next) => {
  // #swagger.tags = ['Villains']
  // #swagger.description = 'Get villain'
  villain.getVillainById(req, res, next);
});

router.post('/', isAuthenticated, validateVillain, (req, res, next) => {
  // #swagger.tags = ['Villains']
  villain.createVillain(req, res, next);
});

router.put(
  '/:object_id',
  isAuthenticated,
  validateVillain,
  (req, res, next) => {
    // #swagger.tags = ['Villains']
    // #swagger.description = 'Update villain'
    villain.updateVillain(req, res, next);
  },
);

router.delete('/:object_id', isAuthenticated, (req, res, next) => {
  // #swagger.tags = ['Villains']
  villain.deleteVillain(req, res, next);
});

module.exports = router;
