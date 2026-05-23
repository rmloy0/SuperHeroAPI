const env = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

let _db;

// const initDB = (callback) => {
//   MongoClient.connect(process.env.MONGO_URI)
//     .then((client) => {
//       console.log('MongoDB Connected');
//       _db = client.db('week3');
//       callback();
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };

const initDB = async (callback) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(' MongoDB (Mongoose) Connected');

    callback();
  } catch (err) {
    callback(err);
  }
};

// const getDb = () => {
//   if (!_db) {
//     throw new Error('Database not initialized');
//   }
//   return _db;
// };

module.exports = {
  initDB,
  // getDb,
};
