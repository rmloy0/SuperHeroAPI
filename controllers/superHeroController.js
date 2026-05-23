const superHeroModel = require('../models/superHeroModel');

const getAllHeroes = async (req, res, next) => {
  try {
    const data = await superHeroModel.getHeroes();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getHeroById = async (req, res, next) => {
  try {
    const object_id = req.params.object_id;

    const data = await superHeroModel.getHero(object_id);
    if (!data) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
const createHero = async (req, res, next) => {
  try {
    const newSuperHero = {
      name: req.body.name,
      realName: req.body.realName,
      age: req.body.age,
      powers: req.body.powers,
      city: req.body.city,
      team: req.body.team,
      numberOfMovies: req.body.numberOfMovies,
      powerLevel: req.body.powerLevel,
      universe: req.body.universe,
    };
    const data = await superHeroModel.createHero(newSuperHero);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const updateHero = async (req, res) => {
  try {
    const object_id = req.params.object_id;
    console.log('BODY update:', req.body);

    const updateSuperHero = {
      name: req.body.name,
      realName: req.body.realName,
      age: req.body.age,
      powers: req.body.powers,
      city: req.body.city,
      team: req.body.team,
      numberOfMovies: req.body.numberOfMovies,
      powerLevel: req.body.powerLevel,
      universe: req.body.universe,
    };

    const data = await superHeroModel.updateHero(object_id, updateSuperHero);

    if (!data) {
      return res.status(404).json({ message: 'SuperHero not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const deleteHero = async (req, res) => {
  try {
    const object_id = req.params.object_id;

    const data = await superHeroModel.deleteHero(object_id);
    res.status(204).json({ message: 'Hero deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,
};
