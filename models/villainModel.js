const mongodb = require('../database');
const Villain = require('./villainSchema');

const { ObjectId } = require('mongodb');

const getVillains = async () => {
  return await Villain.find();
};

const getVillain = async (object_id) => {
  return await Villain.findById(object_id);
};

const createVillain = async (data) => {
  return await new Villain(data).save();
};

const updateVillain = async (object_id, data) => {
  return await Villain.findByIdAndUpdate(object_id, data, {
    returnDocument: 'after',
    runValidators: true,
  });
};

const deleteVillain = async (object_id) => {
  const result = await mongodb;
  return await Villain.findByIdAndDelete(object_id);
};

module.exports = {
  getVillains,
  getVillain,
  createVillain,
  updateVillain,
  deleteVillain,
};
