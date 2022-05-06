const Sequelize = require('sequelize');
const dotenv = require('dotenv/config.js');

const sequelize = new Sequelize(
  'escola_ingles',
  'root', 
  '', 
  {
    host: '172.17.0.2',
    dialect: 'mariadb',
    port: 3306,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
  }
);


// const sequelize = new Sequelize(database, username, password, {
//   host,
//   port,
//   dialect: 'mysql',
//   operatorsAliases: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

module.exports = sequelize;