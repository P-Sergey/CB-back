const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fusion', 'fusion', 'fusion', {
  host: 'localhost',
  dialect: 'postgres',
});
