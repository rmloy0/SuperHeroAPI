const villainModel = require('../models/villainModel');

const getAllVillains = async (req, res, next) => {
  try {
    const data = await villainModel.getVillains();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getVillainById = async (req, res, next) => {
  try {
    const object_id = req.params.object_id;

    const data = await villainModel.getVillain(object_id);

    if (!data) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const createVillain = async (req, res, next) => {
  try {
    const newVillain = {
      name: req.body.name,
      realName: req.body.realName,
      age: req.body.age,
      powers: req.body.powers,
      city: req.body.city,
      dangerLevel: req.body.dangerLevel,
      numberOfMovies: req.body.numberOfMovies,
      isCaptured: req.body.isCaptured,
      universe: req.body.universe,
    };
    const data = await villainModel.createVillain(newVillain);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const updateVillain = async (req, res, next) => {
  try {
    const object_id = req.params.object_id;
    console.log('BODY update:', req.body);

    const update = {
      name: req.body.name,
      realName: req.body.realName,
      age: req.body.age,
      powers: req.body.powers,
      city: req.body.city,
      dangerLevel: req.body.dangerLevel,
      numberOfMovies: req.body.numberOfMovies,
      isCaptured: req.body.isCaptured,
      universe: req.body.universe,
    };

    const data = await villainModel.updateVillain(object_id, update);

    if (!data) {
      return res.status(404).json({ message: 'Villain not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const deleteVillain = async (req, res, next) => {
  try {
    const object_id = req.params.object_id;

    const data = await villainModel.deleteVillain(object_id);

    if (!data) {
      return res.status(404).json({ message: 'Villain not found' });
    }

    res.status(204).json({ message: 'Villain deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllVillains,
  getVillainById,
  createVillain,
  updateVillain,
  deleteVillain,
};
