'use strict';

var Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/smibDB.db',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

  const db = {};

  db.sequelize = sequelize; 

  module.exports = db;