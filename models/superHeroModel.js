const mongodb = require('../database');
const hero = require('./heroSchema');

const { ObjectId } = require('mongodb');

const getHeroes = async () => {
  return await hero.find();
};

const getHero = async (object_id) => {
  return await hero.findById(object_id);
};

const createHero = async (data) => {
  return await new hero(data).save();
};

const updateHero = async (object_id, data) => {
  return await hero.findByIdAndUpdate(object_id, data, {
    returnDocument: 'after',
    runValidators: true,
  });
};

const deleteHero = async (object_id) => {
  const result = await mongodb;
  return await hero.findByIdAndDelete(object_id);
};

module.exports = {
  getHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero,
};
